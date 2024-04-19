import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './configs';
import { Router } from './router';
import { UserModel } from './models';
import { PathNames } from './core/PathNames';

export const usuarioPruebas: UserModel = {
  documentNumber: 123456789,
  documentType: 'CC',
  names: 'Juan',
  lastNames: 'Perez',
  personalPhone: '1234567890',
  personalEmail: '',
  username: 'juanperez',
  password: 'Abc.1234',
  roles: [],
  state: false,
  allowedRoutes: [
    PathNames.USERS,
    PathNames.ROLES,
    PathNames.BUSINESS,
    PathNames.PERMISSIONS,
    PathNames.PLANS,
    PathNames.ACTIVITY,
    PathNames.STATISTICS,
    PathNames.CLOSE_SESSION,
    PathNames.COMPONETS,
  ],
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
};

export default App;
