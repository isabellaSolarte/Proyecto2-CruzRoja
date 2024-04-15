import { IconButton, InputBase, Paper, SxProps } from "@mui/material";
import { useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';

interface SearchProps {
  placeholder: string;
  onSearch?: (searchText: string) => void;
  sx?: SxProps;
}

/**
 * Un componente de búsqueda que permite a los usuarios ingresar una consulta de búsqueda y realizar una búsqueda.
 *
 * @component
 * @example
 * ```tsx
 * <Search placeholder="Buscar..." onSearch={handleSearch} />
 * ```
 * @param {string} placeholder - El texto de marcador de posición para el campo de búsqueda.
 * @param {Function} onSearch - La función de devolución de llamada que se llamará cuando se haga clic en el botón de búsqueda o se presione la tecla Enter.
 * @param {SxProps} sx - Opcional. Las propiedades de estilo de MUI para personalizar el componente.
 * @returns {JSX.Element} El componente de búsqueda.
 */
const Search: React.FC<SearchProps> = ({ placeholder='', onSearch, sx }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    console.log('Texto de búsqueda:', event.target.value);
  };

  const handleClearSearch = () => {
    setSearchText('');
    console.log('Limpiando búsqueda');
  };

  const handleSearch = () => {
    // Lógica para realizar la búsqueda
    console.log('Realizando búsqueda:', searchText);
    if (onSearch) {
      onSearch(searchText);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch();
    }
  };

  return (
    <div>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 'fullWidth', ...sx }}
      >
        {searchText && (
          <IconButton onClick={handleClearSearch}>
            <ClearIcon />
          </IconButton>
        )}
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder={placeholder}
          inputProps={{ 'aria-label': placeholder, value: searchText }}
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
