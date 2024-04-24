import { RolAdapter } from '../../../adapters';
import { RoleModel } from '../../../models';
import { api } from '../api';
import { RolesEndpoints } from './Endpoints';

export const getAllRoles = async (): Promise<RoleModel[]> => {
  try {
    const response = await api.get(RolesEndpoints.getAllRoles);
    const adaptedRoles: RoleModel[] = response.data.map((externalRol: any) =>
      RolAdapter(externalRol),
    );
    return adaptedRoles;
  } catch (err) {
    throw new Error(JSON.stringify(err));
  }
};

export const getRolId = async (id: number): Promise<RoleModel> => {
  try {
    const response = await api.get(`/roles/idRole/${id}`)
    const adaptedRoles: RoleModel = response.data.map((externalRol: any) =>
      RolAdapter(externalRol),
    );
    return adaptedRoles;
  } catch (err) {
    throw new Error(JSON.stringify(err));
  }
};
