import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './configs';
import { Router } from './router';
import CustomButton from './components/Atoms/Button/Button';
import { Typography } from '@mui/material';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
      <CustomButton content="Ejemplo" variant="contained" color="info" sx={{ fontSize: '16px' }} />
    </ThemeProvider>
  );
};

export default App;
