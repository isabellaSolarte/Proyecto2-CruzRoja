import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './configs';
import { Router } from './router';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <CssBaseline />
        <Router />
      </RecoilRoot>
    </ThemeProvider>
  );
};

export default App;
