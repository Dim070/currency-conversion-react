import axios from 'axios';
import { API_CONVERT, API_KEY, API_LATEST } from '../constants/constants';
import { IConvert } from '../models/IConvert';

export const getConvert = async ({ from, to, amount }: IConvert) => {
  return await axios
    .get(`${API_CONVERT + API_KEY}`, {
      params: {
        from,
        to,
        amount
      }
    })
    .then((response) => {
      return response.data.response;
    })
    .catch(() => {
      console.log('Не удалось получить данные');
    });
};

export const getCurrencies = async (fiat: string) => {
  return await axios
    .get(`${API_LATEST + API_KEY}`, {
      params: {
        base: fiat
      }
    })
    .then((response) => {
      return response.data.response;
    })
    .catch(() => {
      console.log('Не удалось получить данные');
    });
};
