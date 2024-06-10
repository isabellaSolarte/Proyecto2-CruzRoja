import { useUserActions } from '../../recoil';
import { UserModel } from '../../models';
import { Navigate } from 'react-router-dom';
import { PathNames } from '../PathNames';

interface PublicProtectorProps {
  component: React.ReactNode;
}

const PublicProtector = ({ component }: PublicProtectorProps) => {
  const user: UserModel | undefined = useUserActions().getLoggedUser();
  if (user) return <Navigate to={PathNames.HOME} />;
  else return <>{component}</>;
};

export default PublicProtector;
