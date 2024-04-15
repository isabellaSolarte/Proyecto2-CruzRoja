import { Card, CardContent, CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './configs';
import { Router } from './router';
import Search from './components/Atoms/Search/Search';
import { useState } from 'react';

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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
      <Card sx={{ backgroundColor: '#f5f5f5' }}>
        <CardContent>
        <h1>Search App</h1>
        <Search placeholder="Buscar..." onSearch={handleSearch} />
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
