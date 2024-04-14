import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './configs';

/*const options: Option[] = [
  { value: '1', label: 'Opción 1' },
  { value: '2', label: 'Opción 2' },
  { value: '3', label: 'Opción 3' },
];*/
const App = () => {
  return (
    
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
    </ThemeProvider>
  );
};

export default App;
