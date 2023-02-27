import React, { useEffect, useState } from 'react';
import { fetchCurrencies } from '../../services/currenciesService';
import { convertRatesToObjectArray } from '../../utils/utils';
import { ICurrencyRate } from '../../models/ICurrencies';
import { DEFAULT_CURRENCIES } from '../../constants/constants';
import CurrencySection from '../../components/currencyToSection/CurrencySection';
import { useFiats } from '../../hooks/useFiats';
import DropDown from '../../components/dropDown/DropDown';
import styles from './styles.module.scss';
import { useQuery } from 'react-query';

const CurrenciesPage = () => {
  const [currencies, setCurrencies] = useState<ICurrencyRate[]>([DEFAULT_CURRENCIES]);
  const [defaultCurrency, setDefaultCurrency] = useState('RUB');

  // ddos на сервер
  const { data: currenciesData } = useQuery(['currencies', defaultCurrency], () => fetchCurrencies(defaultCurrency), {
    keepPreviousData: true,
    enabled: defaultCurrency === 'RUB',
    refetchOnWindowFocus: false
  });

  console.log(currencies, 'currencies');

  useEffect(() => {
    setCurrencies(convertRatesToObjectArray(currenciesData));
  }, [currenciesData]);

  const currencyChange = (value: string) => {
    setDefaultCurrency(value);
  };

  const fiats = useFiats();

  return (
    <div className={styles.currenciesPage}>
      <h2>Currencies</h2>
      <DropDown defaultValue={defaultCurrency} params={fiats} currencyChange={currencyChange} />
      <div className={styles.section}>
        {currencies.map(({ currency, rate }) => (
          <CurrencySection key={currency} currency={currency} value={rate} />
        ))}
      </div>
    </div>
  );
};

export default CurrenciesPage;
