import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { Box } from '@mui/material';

const SelectCity = () => {
        const [country, setCountry] = useState('');
        const [city, setCity] = useState('');

        const handleChangeCountry = (event) => {
            setCountry(event.target.value);
        };

        const handleChangeCity = (event) => {
            setCity(event.target.value);
        };
  return (
      <div style={{
          display:"flex",
          justifyContent:"center"
      }}>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-country">country</InputLabel>
                <Select
                    labelId="demo-select-country"
                    id="demo-select-country"
                    value={country}
                    label="country"
                    onChange={handleChangeCountry}
                    sx={{
                        width:"120px"
                    }}
                >
                <MenuItem value="">
                <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Syria</MenuItem>
                <MenuItem value={20}>UAE</MenuItem>
                <MenuItem value={30}>USA</MenuItem>
            </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-city">city</InputLabel>
                <Select
                    labelId="demo-select-city"
                    id="demo-select-city"
                    value={city}
                    label="city"
                    onChange={handleChangeCity}
                    sx={{
                        width:"120px"
                    }}
                >
                <MenuItem value="">
                <em>None</em>
                </MenuItem>
                <MenuItem value={40}>Aleppo</MenuItem>
                <MenuItem value={50}>Dubia</MenuItem>
                <MenuItem value={60}>NewYork</MenuItem>
            </Select>
        </FormControl>
      </div>
  )
}

export default SelectCity

