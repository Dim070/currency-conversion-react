import { useState } from 'react';
import { DEFAULT_ROUNDED_NUMBER } from '../constants/constants';

export const useRoundedNumber = (value: number) => {
  const [roundedNumber, setRoundedNumber] = useState(DEFAULT_ROUNDED_NUMBER);
  if (value === 0) return 0;
  const result = +value.toFixed(roundedNumber);
  switch (result) {
    case 0:
      setRoundedNumber((prevState) => ++prevState);
      break;
    default:
      return result;
  }
};
