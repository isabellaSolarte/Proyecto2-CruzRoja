import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './configs';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
