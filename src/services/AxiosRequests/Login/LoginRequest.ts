import { PathNames } from '../../../core';
import { Credentials, UserModel } from '../../../models';
import { api } from '../api';

export const LoginRequest = async (
  loginData: Credentials,
): Promise<UserModel> => {
  const response = await api.post('/auth', loginData);
  // TODO: llamar a la API para hacer login con los datos de loginData
  // TODO:
  console.log('response login', response);

  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
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
          PathNames.LOGIN,
        ],
      });
    }, 2000);
  });
};
