import React from 'react';

// custom;
import userForm from '../custom/useForm';
import {
  billingFormSchema,
  dropDownPaymentMethod,
} from '../formSchemas/billingFormSchema';
import './styles.scss';

interface Iprops {
  id: string;
}

const AccountForm: React.FC<Iprops> = (props: Iprops) => {
  /* const [name, changeName] = useState<string>('');
  const [surname, changeSurname] = useState<string>(''); */
  const register = () => {
    console.log(':::Account object:::', values);
  };

  const [values, changeValues, validateValues, handleSubmit] = userForm(
    props.id,
    register,
    billingFormSchema
  );

  return (
    <form onSubmit={handleSubmit} id={props.id}>
      <label htmlFor="surname">surname</label>
      <input
        type="text"
        name="surname"
        className={values.surname && values.surname.error && 'error'}
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
        name="name"
        className={values.name && values.name.error && 'error'}
        value={values.name.value}
        onChange={changeValues}
        onBlur={validateValues}
        data-error={values.name && values.name.error}
      />
      {values.name && values.name.error ? (
        <span className={'errorText'}>{values.name.error}</span>
      ) : null}
      <label htmlFor="paymentMethod">payment Method</label>
      <select
        name="paymentMethod"
        className={
          values.paymentMethod && values.paymentMethod.error && 'error'
        }
        defaultValue={values.paymentMethod.value}
        //onBlur only work when you select option so no point
        //to validate on that
        onChange={changeValues}
        data-error={values.paymentMethod && values.paymentMethod.error}
      >
        <option style={{ color: 'gray' }} value="" disabled>
          pick a payment method
        </option>
        {dropDownPaymentMethod.map((option, index) => (
          <option value={option.value} key={option.label + index}>
            {option.label}
          </option>
        ))}
      </select>
      {values.paymentMethod && values.paymentMethod.error ? (
        <span className={'errorText'}>{values.paymentMethod.error}</span>
      ) : null}
      <label htmlFor="accountNumber">accountNumber</label>
      <input
        type="number"
        className={
          values.accountNumber && values.accountNumber.error && 'error'
        }
        name="accountNumber"
        value={values.accountNumber.value}
        onChange={changeValues}
        onBlur={validateValues}
        data-error={values.accountNumber && values.accountNumber.error}
      />
      {values.accountNumber && values.accountNumber.error ? (
        <span className={'errorText'}>{values.accountNumber.error}</span>
      ) : null}
      <input type="submit" value="submit" disabled={false} />
    </form>
  );
};

export default AccountForm;
