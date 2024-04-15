import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './configs'; // Asegúrate de importar tu tema
import CustomSwitch from './components/Switch/CustomSwitch';
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CustomSwitch /> 
    </ThemeProvider>
  );
};

export default App;