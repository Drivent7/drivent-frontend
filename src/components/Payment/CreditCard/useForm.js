import { useState } from 'react';
import validateInfo from './validateInfo';
import { useContext } from 'react';
import { useContextPayment } from '../useContextPayment';

const useForm = () => {
  const [values, setValues] = useState({
    cardName: '',
    cardNumber: '',
    cardExpiration: '',
    cardSecurityCode: '',
    focus: '',
    issuer: '',
  });

  const [errors, setErrors] = useState({});

  const handleCallback = (_ref, isValid) => {
    if (isValid) {
      setValues({
        ...values,
        issuer: _ref.issuer,
      });
    }
  };

  const handleFocus = (e) => {
    setValues({
      ...values,
      focus: e.target.name === 'cardSecurityCode' ? 'cvc' : e.target.name,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateInfo(values));
  };
 
  return { handleChange, handleFocus, handleSubmit, handleCallback, values, errors };
};

export default useForm;
