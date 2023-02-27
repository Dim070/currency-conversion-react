import React, { ChangeEvent, FC } from 'react';
import styles from './styles.module.scss';
import { OutlinedInput } from '@material-ui/core';
import { InputAdornment } from '@mui/material';
import { useRoundedNumber } from '../../hooks/useRoundedNumber';

interface Props {
  value: number;
  currency: string;
  label?: string;
  handler?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  disabled?: boolean;
}

const CurrencySection: FC<Props> = ({ value, currency, label, disabled, handler }) => {
  const currencyValue = useRoundedNumber(value || 0);

  return (
    <>
      {label && <span className={styles.text}>{label}</span>}
      <OutlinedInput
        className={styles.input}
        disabled={disabled}
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
        endAdornment={<InputAdornment position="end">{currency}</InputAdornment>}
        onChange={handler}
        value={currencyValue || ''}
      />
    </>
  );
};

export default CurrencySection;
