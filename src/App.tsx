import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './configs';
import { TabsAtomComponent } from './components/Atoms/Tabs';
import { CustomButton } from './components';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TabsAtomComponent tabContentItem={['siu', 'no']} />
      <CustomButton content="Ejemplo" variant="contained" color="info" sx={{ fontSize: '16px', padding: '5px'}}/>
    </ThemeProvider>
  );
};

export default App;
