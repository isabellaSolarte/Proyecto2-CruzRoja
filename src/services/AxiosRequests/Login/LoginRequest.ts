import { LoggedInAdapter } from '../../../adapters';
import { Credentials, LoggedUser } from '../../../models';
import loginApi from '../loginApi';

export const LoginRequest = async (
  loginData: Credentials,
): Promise<LoggedUser> => {
  const response = await loginApi.post('/auth', loginData);

  const adaptedResponse: LoggedUser = LoggedInAdapter(response.data);
  return adaptedResponse;
};
