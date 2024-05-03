import { useRecoilState, useResetRecoilState } from 'recoil';
import { Credentials, UserModel } from '../../../models';
import { authAtom, userAtom } from '../States';
import { LoginRequest, api } from '../../../services';
import { useNavigate } from 'react-router-dom';
import { PathNames } from '../../../core';
import Swal from 'sweetalert2';
import { useEffect } from 'react';

const useUserActions = () => {
  const [auth, setAuth] = useRecoilState(authAtom);
  const [user, setUser] = useRecoilState(userAtom);
  const navigate = useNavigate();
 
  useEffect(() => {
    // Verificar si hay datos guardados en el almacenamiento local al cargar la aplicación
    const savedAuth = localStorage.getItem('authAtom');
    const savedUser = localStorage.getItem('user');    
    if (savedAuth && savedUser) {
      setAuth(savedAuth);
      setUser(JSON.parse(savedUser));
    }
    if (auth) {
      api.interceptors.request.use(config => {
        config.headers.Authorization = `Bearer ${auth}`;
        return config;
      });
    }
  }, [auth, setAuth, setUser]);

  async function login(credentiasl: Credentials, rememberMe: boolean) {
    try {
      const logedUser = await LoginRequest(credentiasl);
      setAuth(logedUser.token);

      const userData: UserModel = logedUser.user;
      setUser(userData);

      // Guardar datos en localStorage si se marcó "Recuérdame"
      console.log('rememberMe:', rememberMe);
      
      if (rememberMe) {
        //"authAtom"
        localStorage.setItem('authAtom', logedUser.token);
        localStorage.setItem('user', JSON.stringify(userData));
      } else {
        // Limpiar datos guardados si no se marcó "Recuérdame"
        localStorage.removeItem('authAtom');
        localStorage.removeItem('user');
      }

      navigate(PathNames.USERS);
    } catch (error) {
      void Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Invalid credentials',
      });
    }
  }

  function logout() {
    setAuth(undefined);
    setUser(undefined);
    localStorage.removeItem('authAtom');
    localStorage.removeItem('user');
    // remove user from local storage, set auth state to null and redirect to login page
    // setAuth(null);
    // history.push('/account/login');
  }

  function getLoggedUser() {
    return user;
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
    resetUser: useResetRecoilState(authAtom)
  };
};

export default useUserActions;
