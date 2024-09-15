/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Autocomplete, Stack, TextField } from '@mui/material';
import { CustomText } from '../../Atoms';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';

interface optionSearchType {
  label: string;
  value: object;
}

interface FilmOptionType {
  options: optionSearchType[];
  placeholder: string;
  inputTitle: string;
  onChangeEvent: (newValue: string) => void;
  props: any;
}

const CustomSearchInput = ({ options, placeholder, inputTitle, onChangeEvent }: FilmOptionType) => {
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id={inputTitle}
        disableClearable
        onChange={(event, newValue) => {
          onChangeEvent(newValue);
        }}
        options={options.map(option => option.label)}
        renderInput={params => (
          <>
            <CustomText
              texto={inputTitle}
              variante="texto"
              icon={<EnergySavingsLeafIcon color="success" />}
            />
            <TextField
              {...params}
              placeholder={placeholder}
              label={inputTitle}
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
            />
          </>
        )}
      />
    </Stack>
  );
};

export default CustomSearchInput;
