export const radioAgeButton = {
  '0-30': { value: '30' },
  '31-60': { value: '60' },
  '61-90': { value: '90' },
};

export const addressFormSchema = {
  surname: { value: '', required: true, error: '' },
  name: { value: '', required: true, error: '' },
  //age is radio button pick 30,60 or 90 for default checked value
  age: { value: '90', required: true, error: '' },
  telephone: { value: '', required: true, error: '' },
  about: { value: '', required: true, error: '' },
  hobby: { value: '', error: '' },
};
