/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from 'react';
import { Box } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { SxProps } from '@mui/material';
import { OptionSelector } from '../../../models';
import { Control, Controller } from 'react-hook-form';

interface CustomSelectProps {
  options: OptionSelector[];
  label: string;
  labelId: string;
  disabled?: boolean;
  error?: boolean;
  readOnly?: boolean;
  required?: boolean;
  onChangeAction?: Function;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
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
const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  label,
  labelId,
  control,
  sx,
  readOnly,
  onChangeAction,
  disabled,
  ...props
}) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value);
    if (onChangeAction) {
      onChangeAction(event.target.value);
    }
  };

  return (
    <Box sx={{ minWidth: 120, ...sx }}>
      <FormControl sx={{ m: 1, minWidth: 80 }} {...props} id={labelId}>
        <InputLabel id={labelId}>{label}</InputLabel>
        <Controller
          name={labelId} // Should match the registered field name ('address.country')
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              value={selectedValue}
              onChange={handleChange}
              label={label}
              inputProps={{ readOnly }}
              disabled={disabled ? disabled : false}
            >
              {options.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          )}
        />
      </FormControl>
    </Box>
  );
};

export default CustomSelect;
