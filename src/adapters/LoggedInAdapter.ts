import { LoggedUser } from '../models';

const LoggedInAdapter = (externalUserLogged: any): LoggedUser => {
  return {
    id: externalUserLogged.documentNumber,
    username: externalUserLogged.username,
    token: externalUserLogged.token,
  };
};

export default LoggedInAdapter;
