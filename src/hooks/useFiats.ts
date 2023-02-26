import { useEffect, useState } from 'react';
import { IFeat } from '../models/ICurrencies';
import axios from 'axios';
import { API_FEATS, API_KEY, DEFAULT_FEAT } from '../constants/constants';

export const useFiats = () => {
  const [fiats, setFiats] = useState<IFeat[]>([DEFAULT_FEAT]);

  useEffect(() => {
    const fetchFiats = async () => {
      const response = await axios.get(`${API_FEATS + API_KEY}`, {
        params: {
          type: 'fiat'
        }
      });
      const fiatsArray = Object.keys(response.data.response.fiats).map((key) => {
        return { currency_code: key };
      });
      setFiats(fiatsArray);
    };

    fetchFiats().catch((error) => {
      console.log('Не удалось получить список функций', error);
    });
  }, []);

  return { fiats };
};
