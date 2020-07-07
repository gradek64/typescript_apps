import { useState, useEffect } from 'react';
import validate from 'validate.js';
import { validatorRules } from '../utils/validatorRules';
//uttils
import { getElementBoundingClientRec } from '../utils/getElementBoudingClientRec';
//types models
import * as utilities from './useForm.model';

interface IFormSchema {
  [key: string]: {
    value: string;
    required?: boolean;
    touched?: boolean;
    error: string;
  };
}

const validateEmptyFields = (fields: IFormSchema) => {
  Object.keys(fields).forEach((field) => {
    fields[field].touched = true;
    fields[field].error =
      fields[field].value === '' && fields[field].required
        ? 'field can not be empty'
        : '';
  });
  return fields;
};
/* type InputOrTextArea =
  | React.FormEvent<HTMLInputElement>
  | React.FormEvent<HTMLTextAreaElement>
  | React.FormEvent<HTMLSelectElement>; */

/* #useForm custom hook need to specify what to return so typescript will
guess correctly what needs to return instead of giving only union type
values inside array as (string | number)[] we need to tell it in interface! 
*/

//U can call useForm() without any parames
let formsIDs: { [key: string]: string | [string] } = {};
let allForms: { [key: string]: string | [string] } = {};
const useForm = (
  formId: string,
  onSubmit: () => void,
  formSchema: {
    [key: string]: {
      value: string;
      required?: boolean;
      touched?: boolean;
      error: string;
    };
  }
): utilities.UseFormStateReturn => {
  const [formState, setState] = useState(formSchema);

  /* 
  #second state for tracking if any of the forms is submited for useEffect
  scrolling mechanisim (only scroll on submit click) 
  */
  const [submitState, isSubmited] = useState({ submited: false, form: 'none' });

  if (submitState.form === 'all') {
    allForms = { ...formsIDs, [formId]: formId };
    formsIDs = { [formId]: formId };
  } else {
    allForms = { [formId]: formId };
  }

  /* console.log('should reload', state);
  console.log('should reload', updateStateFromGlobal); */

  /* #useEffect() hook is great for synchronising real DOME
    with react virtual DOME.. update to any is recognized 
    without any delay. so if you instant update on real DOME
    use it !. React gurantees that all update has bee finished once 
    this effect is running
  */
  let formElementsWithError: Element[];
  useEffect(() => {
    //scroll to the input error position!
    let forms: HTMLFormElement[] = [];
    if (submitState.form === 'all') {
      Object.keys(allForms).forEach((formsID) => {
        //all form with the ids sendTo useForm hook id prop
        forms.push(<HTMLFormElement>document.getElementById(formsID));
      });
    } else {
      //only individual form being submitted
      forms = [document.getElementById(formId)] as HTMLFormElement[];
    }

    //make sure the given ids from exists in in the dom <form id='formId' />
    try {
      forms[0].children;
    } catch (error) {
      throw new Error(`form with id ${formId} doent exist in the Dome`);
    }

    formElementsWithError = forms.reduce<Element[]>((erroredFields, form) => {
      const formElements = Array.from(form.children);
      const formElementsWithErrors = <Element[]>(
        formElements.filter((element: HTMLFormElement) => element.dataset.error)
      );
      erroredFields.push(...formElementsWithErrors);
      return erroredFields;
    }, []);

    if (submitState.submited) {
      const firstError = getElementBoundingClientRec(formElementsWithError)[0];
      const labelMargin = 30;
      if (firstError) {
        window.scrollTo({
          top: firstError.topPos - labelMargin,
          left: firstError.leftPos,
          behavior: 'smooth',
        });
      }
      isSubmited({ ...submitState, submited: false });
    }
  }, [formState, submitState.submited]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.persist();
    event.preventDefault();
    onSubmit && onSubmit();
    const { id } = <HTMLFormElement>event.target;
    isSubmited({ form: id, submited: true });
    const emptyFields = validateEmptyFields(formState);
    //condition if (emptyFields) is only for the sake of clarity
    //setState({ ...formState, ...emptyFields }) would work without it
    if (emptyFields) {
      setState({ ...formState, ...emptyFields });
      return;
    }

    /*  Object.keys(formState).forEach((field) => {
      const error = formState[field].value === ''; */
    //const upErr = { ...formState[field], error: 'is not empty' };
    // console.log('upErr', upErr);

    /**
     * setState update useHook method CAN NOT BE USED in loops
     * simply it only take the latest (the last) of the loop change
     * thefore setState() should be alaws call one only
     *
     *
     */
    return { isok: true };
  };

  const validateValues = (event: utilities.InputOrTextArea) => {
    const { name, value } = <HTMLInputElement | HTMLTextAreaElement>(
      event.target
    );
    //desctucture array that comes from validate.js lib and its validators configuration
    const { error: errorFromEmpty } = validateEmptyFields({
      [name]: formState[name],
    })[name];
    const errorFromValidate = validate({ [name]: value }, validatorRules);
    const errorFromValidateValue =
      (errorFromValidate && errorFromValidate[name]) || '';
    const error: string = errorFromEmpty || errorFromValidateValue;

    /* console.log('errorFromEmpty', errorFromEmpty);
    console.log('errorFromValidate', errorFromValidate);
    console.log('error', error);
    console.log('value', value); */

    setState({
      ...formState,
      [name]: {
        ...formState[name],
        touched: true,
        error, //set the error
      },
    });
  };
  const handleChange = (
    event:
      | React.FormEvent<HTMLInputElement>
      | React.FormEvent<HTMLTextAreaElement>
  ) => {
    event.persist();
    const { name, value } = event.target as
      | HTMLInputElement
      | HTMLTextAreaElement;

    if (formState[name] && formState[name].touched) {
      validateValues(event);
    }

    const currentState = {
      ...formState,
      [name]: {
        ...formState[name],
        value,
        //error: '', //reset error once typing again (optional)
      },
    };
    setState((prevState) => ({ ...prevState, ...currentState }));

    /* console.log('.....name', name);
    console.log('.....value', value);
    console.log('.....currentState', currentState);
    console.log('.....imidiette formState', formState);
    console.log('{ ...prevState, ...currentState }', {
      ...formState,
      ...currentState,
    }); */
  };
  return [formState, handleChange, validateValues, handleSubmit];
};

export default useForm;
