import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Option {
  value: string | number;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  label: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, label }) => {
  const [selectedValue, setSelectedValue] = useState<string | number>('');

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="custom-select-label">{label}</InputLabel>
        <Select
            labelId="custom-select-label"
            id="custom-select"
            value={selectedValue} 
            label={label}
            onChange={handleChange}
        >
            {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CustomSelect;
