import { useState, useEffect } from 'react';

const useInput = (validateInput, defaultInput = '') => {

  const [input, setInput] = useState(defaultInput);
  const [isValid, setValid] = useState(!!defaultInput);
  const [isTouched, setTouched] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const err = isTouched && !isValid;
    setError(err);
  }, [isValid, isTouched]);

  const handleInputChange = event => {
    event.preventDefault();
    const newInput = event.target.value;
    setInput(newInput);
    setValid(validateInput(newInput));
  };

  const handleInputBlur = () => {
    setTouched(true);
  };

  const handleInputFocus = () => {
    setTouched(false);
  };

  const resetInput = () => {
    setInput('');
    setTouched(false);
    setValid(false);
  };

  return {
    input,
    isValid,
    isTouched,
    error,
    handleInputChange,
    handleInputBlur,
    handleInputFocus,
    resetInput
  };
};

export default useInput;
