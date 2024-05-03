import { LoggedUser } from '../models';
import { UserAdapter } from './UserAdapter';

const LoggedInAdapter = (externalUserLogged: any): LoggedUser => {
  return {
    user: UserAdapter(externalUserLogged.user),
    token: externalUserLogged.token,
  };
};

export default LoggedInAdapter;
