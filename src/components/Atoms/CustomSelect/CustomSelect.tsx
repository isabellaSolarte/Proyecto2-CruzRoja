/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from 'react';
import { Box } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { SxProps } from '@mui/material';
import { OptionSelector } from '../../../models';

interface CustomSelectProps {
  options: OptionSelector[];
  label: string;
  disabled?: boolean;
  error?: boolean;
  readOnly?: boolean;
  required?: boolean;
  sx?: SxProps;
}
/**
 * Componente CustomSelect.
 *
 * @component
 * @example
 * ```tsx
 * <CustomSelect
 *   options={options}
 *   label="Edad"
 *   sx={{ backgroundColor: '#f5f5f5' }}
 *   disabled={false}
 *   error={false}
 *   readOnly={false}
 *   required={true}
 * />
 * ```
 * @param {OptionSelector[]} options - Las opciones para el componente select.
 * @param {string} label - La etiqueta para el componente select.
 * @param {boolean} [disabled] - Si el componente select está deshabilitado.
 * @param {boolean} [error] - Si el componente select tiene un error.
 * @param {boolean} [readOnly] - Si el componente select es de solo lectura.
 * @param {boolean} [required] - Si el componente select es requerido.
 * @param {SxProps} [sx] - Las propiedades de estilo para el componente select.
 * @returns {JSX.Element} El componente CustomSelect renderizado.
 */
const CustomSelect: React.FC<CustomSelectProps> = ({ options, label, sx, readOnly, ...rest }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, ...sx }}>
      <FormControl sx={{ m: 1, minWidth: 80 }} {...rest}>
        <InputLabel id="custom-select-label">{label}</InputLabel>
        <Select
          labelId="custom-select-label"
          id="custom-select"
          value={selectedValue}
          label={label}
          onChange={handleChange}
          inputProps={{ readOnly }}
        >
          {options.map(option => (
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
