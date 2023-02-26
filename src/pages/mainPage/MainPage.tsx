import React, { ChangeEvent, memo, useEffect, useState } from 'react';
import { Container, InputAdornment } from '@mui/material';
import styles from './styles.module.scss';
import { DEFAULT_CONVERT } from '../../constants/constants';
import { IConvert } from '../../models/IConvert';
import { OutlinedInput } from '@material-ui/core';
import { getConvert } from '../../services/currenciesService';

function MainPage() {
  const [amount, setAmount] = useState<number>(0);
  const [convert, setConvert] = useState<IConvert>(DEFAULT_CONVERT);
  const [convertData, setConvertData] = useState<IConvert>(DEFAULT_CONVERT);

  useEffect(() => {
    getConvert(convert).then((response) => setConvertData(response));
  }, [convert]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === '' || regex.test(e.target.value)) {
      setAmount(+e.target.value);
      const getData = setTimeout(() => {
        setConvert((prev) => ({
          ...prev,
          amount: +e.target.value
        }));
      }, 2000);
      return () => clearTimeout(getData);
    }
  };

  const roundedNumber = () => {
    return convertData.value ? convertData.value.toFixed(1) : '';
  };

  return (
    <>
      <Container className="container">
        <div className={styles.wrapper}>
          <div className={styles.converter}>
            <span className={styles.text}>У меня есть</span>
            <OutlinedInput
              className={styles.input}
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              endAdornment={<InputAdornment position="end">{convertData.from}</InputAdornment>}
              onChange={(e) => handleChange(e)}
              value={amount || ''}
            />

            <span className={styles.text}>Хочу приобрести</span>
            <OutlinedInput
              className={styles.input}
              disabled={true}
              endAdornment={<InputAdornment position="end">{convertData.to}</InputAdornment>}
              value={roundedNumber()}
            />
          </div>
        </div>
      </Container>
    </>
  );
}

export default memo(MainPage);
