import React, { ChangeEvent, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { DEBOUNCE_TIME, DEFAULT_CONVERT } from '../../constants/constants';
import { IConvert } from '../../models/IConvert';
import { getConvert } from '../../services/currenciesService';
import { Link } from 'react-router-dom';
import CurrencySection from '../../components/currencyToSection/CurrencySection';
import { useRoundedNumber } from '../../hooks/useRoundedNumber';

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
      }, DEBOUNCE_TIME);
      return () => clearTimeout(getData);
    }
  };

  const currencyValue = useRoundedNumber(convertData.value || 0);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.converter}>
          <CurrencySection value={amount} label="У меня есть" currency={convertData.from} handler={handleChange} />
          <CurrencySection value={currencyValue || 0} label="Хочу приобрести" currency={convertData.to} />
          <Link to="/currencies">Перейти на страницу валют</Link>
        </div>
      </div>
    </>
  );
}

export default MainPage;
