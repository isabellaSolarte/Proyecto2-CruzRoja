import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './configs';
import { Router } from './router';
import { UserModel } from './models';
import { PathNames } from './core/PathNames';

export const usuarioPruebas: UserModel = {
  id: 123456789,
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
    PathNames.VIEW_USER,
    PathNames.REGISTER_USER,
    PathNames.EDIT_USER,
    PathNames.ROLES,
    PathNames.CREATE_ROLE,
    PathNames.VIEW_ROLE,
    PathNames.EDIT_ROLE,
    PathNames.PERMISSIONS,
    PathNames.CREATE_PERMISSION,
    PathNames.VIEW_PERMISSION,
    PathNames.EDIT_PERMISSION,
    PathNames.BUSINESS,
    PathNames.CREATE_BUSINESS,
    PathNames.VIEW_BUSINESS,
    PathNames.EDIT_BUSINESS,
    PathNames.PLANS,
    PathNames.CREATE_PLAN,
    PathNames.VIEW_PLAN,
    PathNames.EDIT_PLAN,
    PathNames.ACTIVITY,
    PathNames.CREATE_ACTIVITY,
    PathNames.VIEW_ACTIVITY,
    PathNames.EDIT_ACTIVITY,
    PathNames.STATISTICS,
    PathNames.SETTINGS,
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
