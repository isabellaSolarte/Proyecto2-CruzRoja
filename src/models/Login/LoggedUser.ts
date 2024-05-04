import { UserModel } from '../UserModels';

export interface LoggedUser {
  user: UserModel;
  token: string;
}
