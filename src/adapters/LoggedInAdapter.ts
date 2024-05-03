import { LoggedUser } from '../models';
import { GeneralUserAdapter } from './GeneralUserAdapter';

const LoggedInAdapter = (externalUserLogged: any): LoggedUser => {
  return {
    user: GeneralUserAdapter(externalUserLogged.user),
    token: externalUserLogged.token,
  };
};

export default LoggedInAdapter;
