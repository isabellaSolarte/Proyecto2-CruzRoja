import React, { ReactNode } from 'react';
import Search from '../../Atoms/Search/Search';
import { Box } from '@mui/material';

interface SearchBarProps {
    placeholder: string;
    onSearch?: (searchText: string) => void;
    additionalElements?: ReactNode;
}

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
