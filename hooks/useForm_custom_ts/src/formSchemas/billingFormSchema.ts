export const billingFormSchema = {
  surname: { value: '', required: true, error: '' },
  name: { value: '', required: true, error: '' },
  //payment method is dropdown field
  //for assignig default method pick single one value from
  //dropDownPaymentMethod.value as visa card,mastercard ..
  paymentMethod: { value: '', required: true, error: '' },
  accountNumber: { value: '', required: true, error: '' },
};

export const dropDownPaymentMethod = [
  { label: 'visa card', value: 'visa card' },
  { label: 'mastercard', value: 'mastercard' },
  { label: 'paypal', value: 'paypal' },
  { label: 'klarna', value: 'klarna' },
];
