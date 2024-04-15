import { IconButton, InputBase, Paper } from "@mui/material";
import { useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import CustomButton from "../Button/Button";


const Search: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };
  const handleClearSearch = () => {
    setSearchText('');
  };
  return (
    <div>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      >
        {searchText && (
          <IconButton onClick={handleClearSearch}>
            <ClearIcon />
          </IconButton>
        )}
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Buscar"
          inputProps={{ 'aria-label': 'Buscar' }}
          value={searchText}
          onChange={handleSearchChange}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <CustomButton content="Search" variant="contained" color="primary" />
    </div>
  );
};

export default Search;
