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
  control: Control<any>;
  sx?: SxProps;
  defaultValue?: string | number; // Nuevo prop para el valor por defecto
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  label,
  labelId,
  control,
  sx,
  readOnly,
  onChangeAction,
  disabled,
  defaultValue, // Nuevo prop para el valor por defecto
  ...props
}) => {
  return (
    <Box sx={{ ...sx }}>
      <FormControl sx={{ minWidth: 80 }} {...props} fullWidth>
        <InputLabel id={labelId}>{label}</InputLabel>
        <Controller
          name={labelId}
          control={control}
          defaultValue={defaultValue || ''} // Establecer el valor por defecto
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
