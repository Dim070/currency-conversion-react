import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { IFeat } from '../../models/ICurrencies';
import { FC } from 'react';

interface Props {
  params: IFeat[];
  defaultValue: string;
  currencyChange: (value: string) => void;
}

const DropDown: FC<Props> = ({ params, currencyChange, defaultValue }) => {
  const handleChange = (event: SelectChangeEvent) => {
    currencyChange(event.target.value);
  };

  return (
    <>
      <FormControl sx={{ m: 1, width: 200 }}>
        <InputLabel>{defaultValue}</InputLabel>
        <Select value={defaultValue} label="Default currency" onChange={handleChange}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {params.map(({ currency_code }) => (
            <MenuItem key={currency_code} value={currency_code}>
              {currency_code}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Choose your base currency</FormHelperText>
      </FormControl>
    </>
  );
};

export default DropDown;
