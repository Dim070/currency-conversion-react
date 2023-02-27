import { ICurrencyRate, IFeat } from '../models/ICurrencies';
import { IConvert } from '../models/IConvert';

export const API_KEY = '?api_key=90770932cf473894401015af8002caf2';
export const API_CONVERT = 'https://api.currencybeacon.com/v1/convert';
export const API_LATEST = 'https://api.currencybeacon.com/v1/latest';
export const API_FEATS = 'https://api.currencybeacon.com/v1/currencies';

export const DEFAULT_FEAT: IFeat = {
  currency_code: 'RUB'
};

export const DEFAULT_CONVERT: IConvert = {
  from: 'RUB',
  to: 'USD',
  amount: 0,
  value: 0
};

export const DEFAULT_CURRENCIES: ICurrencyRate = {
  currency: '',
  rate: 0
};

export const DEFAULT_CURRENCIES_LENGTH = 10;
export const DEFAULT_ROUNDED_NUMBER = 1;
export const DEBOUNCE_TIME = 800;
