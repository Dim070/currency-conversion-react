import axios from 'axios';
import { API_CONVERT, API_KEY } from '../constants/constants';
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
