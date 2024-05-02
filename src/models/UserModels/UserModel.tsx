import { PathNames } from '../../core';
import { RoleModel } from '../RoleModels';

export interface UserModel {
  id: number;
  documentType: string;
  names: string;
  lastNames: string;
  personalPhone: string;
  personalEmail: string;
  username: string;
  password: string;
  roles: RoleModel[];
  state: boolean;
  allowedRoutes?: PathNames[];
}
