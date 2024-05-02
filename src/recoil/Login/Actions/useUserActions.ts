import { useRecoilState, useResetRecoilState } from 'recoil';
import { Credentials, RoleModel, UserModel } from '../../../models';
import { userAtom } from '../States';
import { LoginRequest } from '../../../services';
import { useNavigate } from 'react-router-dom';
import { PathNames } from '../../../core';

const useUserActions = () => {
  const [user, setUser] = useRecoilState(userAtom);
  const navigate = useNavigate();

  async function login(credentiasl: Credentials) {
    try {
      const logedUser = await LoginRequest(credentiasl);
      setUser(logedUser);

      // Almacenar la informacion recibida en el response en el localStorage
      localStorage.setItem('authTokens', logedUser.token);

      // Verificar si un elemento existe en el almacenamiento local
      //if (localStorage.getItem('auth') !== null)

      // Borrar un elemento del almacenamiento local (Log out)
      //localStorage.removeItem('auth');

      navigate(PathNames.USERS);
    } catch (error) {
      console.error('Error login', error);
    }
  }

  function logout() {
    setUser(undefined);
    // remove user from local storage, set auth state to null and redirect to login page
    localStorage.removeItem('auth');
    // setAuth(null);
    // history.push('/account/login');
  }

  function getLoggedUser() {
    if (user) {
      const defaultRole: RoleModel = {
        id: 1,
        typeRole: 'Default Role',
        state: true,
        permissions: [
          {
            id: 1,
            name: 'Read',
            description: 'Read permission',
          },
          {
            id: 2,
            name: 'Write',
            description: 'Write permission',
          },
        ],
      };

      const defaultUser: UserModel = {
        id: 1,
        documentType: 'ID',
        names: 'John',
        lastNames: 'Doe',
        personalPhone: '1234567890',
        personalEmail: 'john@example.com',
        username: 'johndoe',
        password: 'password123',
        roles: [defaultRole],
        state: true,
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
          PathNames.NOT_FOUND,
        ], // Ejemplo de rutas permitidas
      };

      return defaultUser;
    }
    return undefined;
  }

  //function update(id, params) {
  // return fetchWrapper.put(`${baseUrl}/${id}`, params).then(x => {
  //   // update stored user if the logged in user updated their own record
  //   if (id === auth?.id) {
  //     // update local storage
  //     const user = { ...auth, ...params };
  //     localStorage.setItem('user', JSON.stringify(user));
  //     // update auth user in recoil state
  //     setAuth(user);
  //   }
  //   return x;
  // });
  //}

  return {
    login,
    logout,
    getLoggedUser,
    resetUser: useResetRecoilState(userAtom),
  };
};

export default useUserActions;
