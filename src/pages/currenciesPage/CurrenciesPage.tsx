import React, { useState } from 'react';
import { fetchCurrencies } from '../../services/currenciesService';
import { convertRatesToObjectArray } from '../../utils/utils';
import CurrencySection from '../../components/currencyToSection/CurrencySection';
import { useFiats } from '../../hooks/useFiats';
import DropDown from '../../components/dropDown/DropDown';
import styles from './styles.module.scss';
import { useQuery } from '@tanstack/react-query';

const CurrenciesPage = () => {
  const [defaultCurrency, setDefaultCurrency] = useState('RUB');

  const { data: currencies } = useQuery([defaultCurrency], () =>
    fetchCurrencies(defaultCurrency).then((response) => convertRatesToObjectArray(response))
  );

  console.log(currencies);

  const currencyChange = (value: string) => {
    setDefaultCurrency(value);
  };

  const fiats = useFiats();

  return (
    <div className={styles.currenciesPage}>
      <h2>Currencies</h2>
      <DropDown defaultValue={defaultCurrency} params={fiats} currencyChange={currencyChange} />
      <div className={styles.section}>
        {currencies?.map(({ currency, rate }) => (
          <CurrencySection key={currency} currency={currency} value={rate} />
        ))}
      </div>
    </div>
  );
};

export default CurrenciesPage;
