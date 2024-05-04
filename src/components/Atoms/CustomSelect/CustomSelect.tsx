/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
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
  defaultValue?: string | number; 
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
  return (
    <Box sx={{ ...sx }}>
      <FormControl sx={{ minWidth: 80 }} {...props} fullWidth>
        <InputLabel id={labelId}>{label}</InputLabel>
        <Controller
          name={labelId}
          control={control}
          defaultValue={props.defaultValue || ""}
          render={({ field }) => (
            <Select
              {...field}
              variant="outlined"
              label={label}
              inputProps={{ readOnly }}
              disabled={disabled}
              onChange={(event: SelectChangeEvent) => {
                field.onChange(event);
                if (onChangeAction) {
                  onChangeAction(event.target.value);
                }
              }}
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