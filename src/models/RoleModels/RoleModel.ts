import { PermissionModel } from './PermissionModel';

export interface RoleModel {
  id: number;
  typeRole: string;
  state: boolean;
  permissions: PermissionModel[];
}
