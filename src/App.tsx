import { Button, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';


const App = () => {
  const { t } = useTranslation('commons');
  const s = '';

  return (
    <Container>
      <Typography variant="h1">Hello World</Typography>
      <Button variant="contained" color="primary">
        {t('generalButtonText.error')}
      </Button>
      <Button variant="contained" color="secondary">
        Secondary {s}
      </Button>
      <Button variant="contained" color="info">
        Info
      </Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
    </Container>
  );
};

export default App;
