import React, { useState } from 'react';

// custom;
import './styles.scss';

export interface IFormData {
  name: string;
  surname: string;
}

const Form = () => {
  const [name, changeName] = useState<string>('');
  const [surname, changeSurname] = useState<string>('');

  const changeFields = (evt: React.FormEvent<HTMLInputElement>) => {
    //event target is just regular js input that needs to be cast to HTMLInputElement
    const { name, value } = evt.target as HTMLInputElement;
    switch (name) {
      case 'name':
        changeName(value);
        break;
      case 'surname':
        changeSurname(value);
        break;
      default:
        break;
    }
  };

  const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log('form object', { name, surname });
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" onChange={changeFields} />
      <input type="text" name="surname" onChange={changeFields} />
      <input type="submit" value="submit" />
    </form>
  );
};

export default Form;
