import { PermissionModel } from "../models"

export const PermissionAdapter = (externPermission: any): PermissionModel => {
  return {
        id: externPermission.idPermission,
        name: externPermission.name,
        description: externPermission.description,
  };
};
