import { PermissionModel } from '../models';

export const PermissionAdapter = (externPermission: any): PermissionModel => {
  return {
    id: externPermission.idPermission,
    name: externPermission.name,
    // name: PermissionNames[
    //   externPermission.name as keyof typeof PermissionNames
    // ],
    description: externPermission.description,
  };
};
