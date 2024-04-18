import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './configs';
import { Router } from './router';
import CustomCard from './components/orgamisms/CustomCard/CustomCard';
import { Search as SearchIcon } from '@mui/icons-material';

const App = () => {
  return (
    
      <ThemeProvider theme={theme}>
      <CssBaseline />
      {/*<CustomCard 
      texto1="Crear empresa"
      icon={<SearchIcon />}
      sx={{ backgroundColor: theme.backgroundContentColors?.green}} 
      />*/}
      <Router />
      </ThemeProvider>
  );
};

export default App;
