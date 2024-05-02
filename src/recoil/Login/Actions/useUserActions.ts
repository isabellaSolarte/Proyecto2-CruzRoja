import { useRecoilState, useResetRecoilState } from 'recoil';
import { Credentials } from '../../../models';
import { authAtom, userAtom } from '../States';
import { LoginRequest, checkUserExist } from '../../../services';
import { useNavigate } from 'react-router-dom';
import { PathNames } from '../../../core';
import Swal from 'sweetalert2';

const useUserActions = () => {
  const [auth, setAuth] = useRecoilState(authAtom);
  const [user, setUser] = useRecoilState(userAtom);
  const navigate = useNavigate();

  async function login(credentiasl: Credentials) {
    try {
      const logedUser = await LoginRequest(credentiasl);
      const userData = await checkUserExist(logedUser.id);

      setAuth(logedUser);
      setUser(userData);

      localStorage.setItem('auth', logedUser.token);
      localStorage.setItem('user', JSON.stringify(userData));

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
    // remove user from local storage, set auth state to null and redirect to login page
    localStorage.removeItem('auth');
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
    resetUser: useResetRecoilState(authAtom),
  };
};

export default useUserActions;
