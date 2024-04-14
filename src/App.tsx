import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './configs';
import { TabsAtomComponent } from './components/Atoms/Tabs';
import { CustomButton } from './components';
import {CustomSelect} from './components';


/*const options: Option[] = [
  { value: '1', label: 'Opción 1' },
  { value: '2', label: 'Opción 2' },
  { value: '3', label: 'Opción 3' },
];*/
const App = () => {
  return (
    
    <ThemeProvider theme={theme}>
      <CssBaseline />
     
      <TabsAtomComponent tabContentItem={['Aún no bro', 'Ya bro']} />
      <CustomButton content="Ejemplo" variant="contained" color="info" sx={{ fontSize: '16px', padding: '5px'}}/>
    </ThemeProvider>
  );
};

export default App;
