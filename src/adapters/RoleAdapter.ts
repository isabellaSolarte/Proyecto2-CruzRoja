/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PermissionModel, RoleModel } from '../models';

export const RolAdapter = (externRol: any): RoleModel => {
  const permissions: PermissionModel[] = externRol.permissions.map(
    (permission: any) => {
      return {
        idPermission: permission.idPermission,
        name: permission.name,
        description: permission.description,
      };
    },
  );

  return {
    id: externRol.idRole,
    typeRole: externRol.typeRole,
    permissions,
  };
};
