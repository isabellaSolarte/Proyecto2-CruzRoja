import { LoggedInAdapter } from '../../../adapters';
import { Credentials, LoggedUser } from '../../../models';
import { api } from '../api';

export const LoginRequest = async (
  loginData: Credentials,
): Promise<LoggedUser> => {
  const response = await api.post('/auth', loginData);

  const adaptedResponse: LoggedUser = LoggedInAdapter(response.data);
  return adaptedResponse;
};
