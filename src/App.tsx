import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './configs';
import { Router } from './router';
import CustomSelect from './components/Atoms/CustomSelect/CustomSelect';

const App = () => {
  const options = [
    { value: 10, label: 'Ten' },
    { value: 20, label: 'Twenty' },
    { value: 30, label: 'Thirty' },
  ];
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
      <CustomSelect options={options} label="Age" sx={{ backgroundColor: '#f5f5f5' }} disabled={false} error={false} readOnly={false} required={true}/>
    </ThemeProvider>
  );
};

export default App;
