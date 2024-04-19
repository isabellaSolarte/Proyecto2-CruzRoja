import { RoleModel } from '../RoleModels/RoleModel';

export interface UserModel {
  documentNumber: number;
  documentType: string;
  names: string;
  lastNames: string;
  personalPhone: string;
  personalEmail: string;
  username: string;
  password: string;
  roles: RoleModel[];
  state: boolean;
  allowedRoutes: string[];
}
