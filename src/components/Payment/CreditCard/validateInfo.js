import valid from 'card-validator';

export default function validateInfo(values) {
  let errors = {};
  let creditCard = valid.number(values.cardNumber);

  creditCard.expirationDate = valid.expirationDate(values.cardExpiration);
  creditCard.cvv = valid.cvv(values.cardSecurityCode);
  creditCard.cardholderName = valid.cardholderName(values.cardName);
  creditCard.postalCode = valid.postalCode(values.cardPostalCode);

  errors.show = true;
  errors.variant = 'danger';
  errors.cname = false;
  errors.cnumber = false;
  errors.ctype = false;
  errors.cexp = false;
  errors.ccvv = false;
  errors.cpostal = false;

  //Card CVV expiration
  if (values.cardSecurityCode === null || !values.cardSecurityCode.trim()) {
    errors.message = 'Credit card CVC is not complete';
  } else if (creditCard.cvv.isValid) {
    errors.ccvv = true;
  } else {
    errors.message = 'Credit card CVC is invalid';
  }

  //Card Expiration Verification
  if (values.cardExpiration === null || !values.cardExpiration.trim()) {
    errors.message = 'Credit card expiration date is not complete';
  } else if (creditCard.expirationDate.isValid) {
    errors.cexp = true;
  } else {
    errors.message = 'Credit card expiration date is invalid';
  }

  //Card Number Verification
  if (values.cardNumber === null || !values.cardNumber.trim()) {
    errors.message = 'Credit card number is not complete';
  } else if (creditCard.isValid) {
    errors.cnumber = true;
  } else {
    errors.message = 'Credit card number is invalid';
  }

  //Cardholder Name Verification
  if (values.cardName === null || !values.cardName.trim()) {
    errors.message = 'Cardholder name is not complete';
  } else if (creditCard.cardholderName.isValid) {
    errors.cname = true;
  } else {
    errors.message = 'Cardholder name is invalid';
  }

  if (errors.ctype && errors.cname && errors.cnumber && errors.cexp && errors.cpostal && errors.ccvv) {
    errors.variant = 'success';
    errors.message = 'Credit Card is valid';
  }

  return errors;
}
