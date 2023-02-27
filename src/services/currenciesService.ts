import axios from 'axios';
import { API_CONVERT, API_KEY, API_LATEST } from '../constants/constants';
import { IConvert } from '../models/IConvert';

export const fetchConvert = async ({ from, to, amount }: IConvert) => {
  const response = await axios.get(`${API_CONVERT + API_KEY}`, {
    params: {
      from,
      to,
      amount
    }
  });
  return response.data.response;
};

export const fetchCurrencies = async (fiat: string) => {
  const response = await axios.get(`${API_LATEST + API_KEY}`, {
    params: {
      base: fiat
    }
  });
  return response.data.response.rates;
};
