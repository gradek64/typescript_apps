import React from 'react';

// custom;
import userForm from '../custom/useForm';
import {
  addressFormSchema,
  radioAgeButton,
} from '../formSchemas/addressFormSchema';
import './styles.scss';
//custom events
import customEvent from '../customEvents/dispatchEvent';

//types
import * as utilities from '../custom/useForm.model';

//U need to have @types/react installed to have all react types available
//but ts deosnt care about your types as long as they dont produces errors ;)
interface Iprops {
  id: string;
  eventOn: string;
}
//specify what genenric object creates Form functional Component
const Form: React.FunctionComponent<Iprops> = (props: Iprops) => {
  /* const [name, changeName] = useState<string>('');
  const [surname, changeSurname] = useState<string>(''); */
  const register = () => {
    console.log(':::form object:::', props.id);
  };

  const [values, changeValues, validateValues, handleSubmit] = userForm(
    props.id,
    register,
    addressFormSchema
  );
  customEvent.on(props.eventOn, handleSubmit);
  return (
    <form onSubmit={handleSubmit} id={props.id}>
      <label htmlFor="surname">surname</label>
      <input
        type="text"
        className={values.surname && values.surname.error && 'error'}
        name="surname"
        //value={values.surname ? values.surname.value : ''}
        // no need for above check if values.surname is defined as in useForm hook
        value={values.surname.value}
        onChange={changeValues}
        onBlur={validateValues}
        data-error={values.surname && values.surname.error}
      />
      {values.surname && values.surname.error ? (
        <span className={'errorText'}>{values.surname.error}</span>
      ) : null}
      <label htmlFor="name">name</label>
      <input
        type="text"
        className={values.name && values.name.error && 'error'}
        name="name"
        value={values.name.value}
        onChange={changeValues}
        onBlur={validateValues}
        data-error={values.name && values.name.error}
      />
      {values.name && values.name.error ? (
        <span className={'errorText'}>{values.name.error}</span>
      ) : null}
      <label htmlFor="about">ABOUT</label>
      <textarea
        name="about"
        className={values.about && values.about.error && 'error'}
        value={values.about.value}
        placeholder={'describe yourself...'}
        onChange={changeValues}
        onBlur={validateValues}
        data-error={values.about && values.about.error}
      />
      {values.about && values.about.error ? (
        <span className={'errorText'}>{values.about.error}</span>
      ) : null}
      <div
        className={`radioButtons ${values.age && values.age.error && 'error'}`}
      >
        {Object.keys(radioAgeButton).map((key, index) => (
          <div key={key + index}>
            <label>{key}</label>
            <input
              type="radio"
              name="age"
              //register error only for first radio button
              data-error={index === 0 ? values.age && values.age.error : ''}
              //the below super smart !!
              checked={radioAgeButton[key].value === values.age.value}
              value={radioAgeButton[key].value}
              onChange={changeValues}
            />
          </div>
        ))}
      </div>
      {values.age && values.age.error ? (
        <span className={'errorText'}>{values.age.error}</span>
      ) : null}
      <label htmlFor="telephone">telephone</label>
      <input
        type="number"
        className={values.telephone && values.telephone.error && 'error'}
        name="telephone"
        value={values.telephone.value}
        onChange={changeValues}
        onBlur={validateValues}
        data-error={values.telephone && values.telephone.error}
      />
      {values.telephone && values.telephone.error ? (
        <span className={'errorText'}>{values.telephone.error}</span>
      ) : null}
      <label htmlFor="hobby">hobby</label>
      <input
        type="text"
        className={values.hobby && values.hobby.error && 'error'}
        name="hobby"
        value={values.hobby.value}
        onChange={changeValues}
        onBlur={validateValues}
        data-error={values.hobby && values.hobby.error}
      />
      {values.hobby && values.hobby.error ? (
        <span className={'errorText'}>{values.hobby.error}</span>
      ) : null}
      <input type="submit" value="submit" disabled={false} />
    </form>
  );
};

export default Form;
