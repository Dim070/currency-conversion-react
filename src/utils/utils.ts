import { ICurrencyRate } from '../models/ICurrencies';
import { DEFAULT_CURRENCIES_LENGTH } from '../constants/constants';

export const convertRatesToObjectArray = (rates: Record<string, number>): ICurrencyRate[] => {
  return Object.entries(rates)
    .slice(0, DEFAULT_CURRENCIES_LENGTH)
    .map(([currency, rate]) => ({ currency, rate }));
};
