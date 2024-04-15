import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './configs';
import { Router } from './router';
import Search from './components/Atoms/Search/Search';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
      <Search />
    </ThemeProvider>
  );
};

export default App;
