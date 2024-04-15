import { Card, CardContent, CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './configs';
import { Router } from './router';
import Search from './components/Atoms/Search/Search';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
      <Card sx={{ backgroundColor: '#f5f5f5' }}>
        <CardContent>
          <Search />
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};

export default App;
