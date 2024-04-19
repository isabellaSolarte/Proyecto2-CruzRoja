import { PermissionModel } from './PermissionModel';

export interface RoleModel {
  idRole: number;
  typeRole: string;
  permissions: PermissionModel[];
}
