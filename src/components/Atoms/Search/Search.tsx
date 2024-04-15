import { IconButton, InputBase, Paper } from "@mui/material";
import { useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';



const Search: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    //console.log('Guardando busqueda:', searchText);
  };
  const handleClearSearch = () => {
    setSearchText('');
    //console.log('Limpiando búsqueda:', searchText);
  };
  const handleSearch = () => {
    // Lógica para realizar la búsqueda
    console.log('Realizando búsqueda:', searchText);
  };
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
      handleSearch();
    }
  };

  return (
    <div>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 'fullWidth' }}
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
          onKeyDown={handleKeyPress}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleSearch}>
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default Search;
