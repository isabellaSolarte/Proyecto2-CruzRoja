import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './configs';
import { Router } from './router';
import AccordionComponent from './components/Molecules/CustomAccordion/CustomAccordion';
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AccordionComponent accordionSummary={'sisas'} contentAccordion={<div>hola</div>} />
    </ThemeProvider>
  );
};

export default App;
