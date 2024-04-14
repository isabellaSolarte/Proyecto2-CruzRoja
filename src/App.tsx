import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './configs';
import { Router } from './router';
import { TabsAtomComponent } from './components/Atoms/Tabs';
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TabsAtomComponent tabContentItem={["s","s"]}/>
    </ThemeProvider>
  );
};

export default App;
