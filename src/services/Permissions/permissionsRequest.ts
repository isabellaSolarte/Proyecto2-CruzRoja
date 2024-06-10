import { api } from "../AxiosRequests";
import { PermissionsEndpoints } from "./Endpoints";
import { PermissionModel } from "../../models";
import { PermissionAdapter } from "../../adapters/PermissionsAdapter";

export const getAllPermissions = async(): Promise<PermissionModel[]>=> {
    try {
      const response = await api.get(PermissionsEndpoints.getPermissions);
      const adaptedPermissions: PermissionModel[] = response.data.map((externalPermission: any) =>
        PermissionAdapter(externalPermission),
      );
      return adaptedPermissions;
    } catch (err) {
      throw new Error(JSON.stringify(err));
    }
  };