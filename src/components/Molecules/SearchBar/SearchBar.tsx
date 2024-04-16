import React, { ReactNode } from 'react';
import Search from '../../Atoms/Search/Search';
import { Box } from '@mui/material';

interface SearchBarProps {
    placeholder: string;
    onSearch?: (searchText: string) => void;
    additionalElements?: ReactNode;
}

/**
 * Componente de barra de búsqueda.
 * @component
 * @example
 * ```tsx
 * <SearchBar
 *  placeholder="Buscar..."
 * onSearch={handleSearch}
 * additionalElements={
 *  <>
 *   <IconButton onClick={handleAdd} aria-label="Agregar">
 *    <AddCircleIcon />
 *  </IconButton>
 * <IconButton aria-label="Ajustes">
 * <SettingsIcon />
 * </IconButton>
 * </>
 * }
 * />
 * ```
 * @param {string} placeholder - El texto de marcador de posición para la barra de búsqueda.
 * @param {Function} onSearch - La función que se ejecuta cuando se realiza una búsqueda.
 * @param {ReactNode} additionalElements - Elementos adicionales que se muestran junto a la barra de búsqueda a su derecha.
 * 
 * @returns {ReactElement} El componente de barra de búsqueda.
 */
const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onSearch, additionalElements }) => {

    const handleSearch = (searchText: string) => {
        if (onSearch) {
            onSearch(searchText);
        }
    };

    return (
        <Box sx={{ display: 'flex', width: 'fullWidth', alignItems: 'center' }}>
            <Search placeholder={placeholder} onSearch={handleSearch} />
            {additionalElements}
        </Box>
    );
};

export default SearchBar;
