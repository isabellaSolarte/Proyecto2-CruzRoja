import { useRecoilState, useResetRecoilState } from 'recoil';
import { Credentials } from '../../../models';
import { userAtom } from '../States';
import { LoginRequest } from '../../../services';
import { useNavigate } from 'react-router-dom';
import { PathNames } from '../../../core';

const useUserActions = () => {
  const [user, setUser] = useRecoilState(userAtom);
  const navigate = useNavigate();

  async function login(credentiasl: Credentials) {
    try {
      const response = await LoginRequest(credentiasl);
      setUser(response);
      navigate(PathNames.USERS);
    } catch (error) {
      console.error('Error login', error);
    }
  }

  function logout() {
    setUser(undefined);
    // remove user from local storage, set auth state to null and redirect to login page
    // localStorage.removeItem('user');
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
    resetUser: useResetRecoilState(userAtom),
  };
};

export default useUserActions;
