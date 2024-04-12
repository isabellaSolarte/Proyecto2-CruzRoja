import { RoleModel } from './RoleModel';

export interface UserModel {
  id: string;
  name: string;
  email: string;
  role: RoleModel;
  password: string;
  avatar: string;
  status: string;
  created_at: string;
  updated_at: string;
}
