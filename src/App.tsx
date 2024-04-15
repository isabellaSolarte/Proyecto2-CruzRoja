import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './configs';
import LabelGroup from './components/Molecules/CustomLabelGroup/CustomLabelGroup';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LabelGroup texto1='Email' texto2='driacos@unicauca.edu.co' icon={<AccountBoxIcon />}/>
    </ThemeProvider>
  );
};

export default App;
