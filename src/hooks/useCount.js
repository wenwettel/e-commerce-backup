import { useState } from 'react';

export const useCount = (initialState, min, max) => {
  const [number, setNumber] = useState(initialState);

  const handleAdd = () => {
    if (number < max) setNumber(number + 1);
  };

  const handleSubstract = () => {
    if (number > min) setNumber(number - 1);
  };
  const handleReset = () => {
    setNumber(initialState);
  };

  return { number, handleAdd, handleSubstract, handleReset };
};
