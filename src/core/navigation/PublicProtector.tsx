import { useUserActions } from '../../recoil';
import { UserModel } from '../../models';
import { Navigate } from 'react-router-dom';
import { PathNames } from '../PathNames';
import { LoginPage } from '../../pages/Login';

const PublicProtector = () => {
  const user: UserModel | undefined = useUserActions().getLoggedUser();
  if (user) return <Navigate to={PathNames.USERS} />;
  else return <LoginPage />;
};

export default PublicProtector;
