import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './configs';
import { Router } from './router';
import { useState } from 'react';
import { Card, CardContent, IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchBar from './components/Molecules/SearchBar/SearchBar';
import SettingsIcon from '@mui/icons-material/Settings';

const App = () => {
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const handleSearch = (searchText: string) => {
    // Aquí puedes implementar la lógica de búsqueda
    // Por ahora, solo simularemos algunos resultados de búsqueda
    const results = ['Result 1', 'Result 2', 'Result 3'].filter(result =>
      result.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleAdd = () => {
    // Implementa la lógica para agregar un elemento
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
      <Card sx={{ backgroundColor: '#f5f5f5' }}>
        <CardContent>
        <h1>Search App</h1>
        <SearchBar 
          placeholder="Buscar..." 
          onSearch={handleSearch} 
          additionalElements={
            <>
              <IconButton onClick={handleAdd} aria-label="Agregar">
                <AddCircleIcon />
              </IconButton>
              <IconButton aria-label="Ajustes">
                <SettingsIcon />
              </IconButton>
            </>
          } 
        />
        <div>
          <h2>Resultados de búsqueda:</h2>
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};

export default App;
