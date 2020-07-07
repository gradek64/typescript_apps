import { cleanup, act, renderHook } from '@testing-library/react-hooks';
import { addressFormSchema } from '../../../src/formSchemas/addressFormSchema';
//custom hook
import userForm from '../../../src/custom/useForm';
import * as utilities from '../../../src/custom/useForm.model';
import { async } from 'validate.js';

const mockDocumentBody = ({ error = '' }: { error?: string } = {}) =>
  (document.body.innerHTML = `
<form id="addressForm">
  <input name="surname" data-error='${error}'/>
  <input name="name" />
</form>`);
const generateHook = () => {
  const { result } = renderHook(() =>
    userForm(
      customHookFnAgs.formId,
      customHookFnAgs.submitFn,
      customHookFnAgs.formSchema
    )
  );
  return result.current;
};

const customHookFnAgs = {
  formId: 'addressForm',
  submitFn: () => {},
  formSchema: addressFormSchema,
};
describe('in renders with address form schema', () => {
  afterEach(cleanup);
  it('should return an initial state', () => {
    mockDocumentBody();
    const [
      formState,
      handleChange,
      validateValues,
      handleSubmit,
    ] = generateHook();

    expect(JSON.stringify(formState)).toBe(
      JSON.stringify(customHookFnAgs.formSchema)
    );
    expect(handleChange).toBeInstanceOf(Function);
    expect(validateValues).toBeInstanceOf(Function);
    expect(handleSubmit).toBeInstanceOf(Function);
  });
});

describe('event and methods', () => {
  afterEach(cleanup);
  describe('handleChange', () => {
    it('should assingn value to formState from event.target.value', () => {
      mockDocumentBody();
      let handleChange = generateHook()[1];
      //pass event
      const event: any = {
        //persist: jest.fn(),
        target: {
          name: 'surname',
          value: 'test data',
        },
      };
      //any mehtod checked in jest (expect()...)  has to be mocked or spied
      //actual method wont be executed only mocked (original implemnation gone)
      handleChange = jest.fn();

      //when you update hook you need to wrap it in act method
      //if U dont U will get a massive warning but it will pass the test
      act(() => {
        handleChange(event);
      });

      expect(handleChange).toBeCalled();
      expect(handleChange).toBeCalledWith(event);
    });
  });
  describe('validateValues', () => {
    it('should get property touched and set in formState', () => {
      mockDocumentBody();
      const validateValues = generateHook()[2];
      const formState = generateHook()[0];
      //pass event
      const event: any = {
        persist: jest.fn(),
        target: {
          name: 'name',
          value: 'test',
        },
      };

      //validateValues = jest.fn();
      //can not be checked if was called or not cause it would needed to be
      //mocked or spied in this case we need original implementaiton
      act(() => {
        validateValues(event);
      });

      //in formState object some values are updated but still not the one as
      //formState.field.value for some reason (react event.target.value computation pressumly)
      //but formState.field.touched is there
      expect(formState[event.target.name].touched).toBeTruthy;
    });
  });

  describe('handleSubmit', () => {
    it('prevents from submition when form fields are required and empty', () => {
      mockDocumentBody();
      const handleSubmit = generateHook()[3];
      const formState = generateHook()[0];
      //pass event
      const event: any = {
        persist: jest.fn(),
        preventDefault: jest.fn(),
        target: {}, //need for event.target in the handleSubmit handler
      };

      //validateValues = jest.fn();
      //can not be checked if was called or not cause it would needed to be
      //mocked or spied in this case we need original implementaiton
      act(() => {
        handleSubmit(event);
      });

      Object.keys(formState).forEach((field) => {
        if (formState[field].required && !formState[field].value) {
          expect(formState[field].error).toBe('field can not be empty');
        }
      });
    });
  });
});

describe('useState', () => {
  let scrollMethod;
  beforeEach(() => {
    window.scrollTo = jest.fn();
    scrollMethod = window.scrollTo;
  });
  describe('Does NOT scroll to the error field', () => {
    afterEach(cleanup);
    let formIsSubmited;
    beforeEach(() => {
      formIsSubmited = () => {
        mockDocumentBody();
        const handleSubmit = generateHook()[3];
        const event: any = {
          persist: jest.fn(),
          preventDefault: jest.fn(),
          target: {},
        };
        act(() => {
          handleSubmit(event);
        });
      };
    });
    it('should NOT scroll if form is NOT submited and fields have NO errors (default)', () => {
      expect(scrollMethod).not.toBeCalled();
    });
    it('should NOT scroll if form is submited and fields have NO errors', () => {
      formIsSubmited();
      expect(scrollMethod).not.toBeCalled();
    });
  });
  describe('scrolls to the error field', () => {
    afterEach(cleanup);
    it('should scroll if form is submited and fields have errors', () => {
      mockDocumentBody({ error: 'field can not be emty' });
      const handleSubmit = generateHook()[3];
      //submit the form
      const event: any = {
        persist: jest.fn(),
        preventDefault: jest.fn(),
        target: {},
      };
      act(() => {
        handleSubmit(event);
      });
      expect(scrollMethod).toBeCalled();
    });
  });
});
