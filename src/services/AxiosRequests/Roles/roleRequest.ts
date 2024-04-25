import { RolAdapter } from '../../../adapters';
import { RoleModel } from '../../../models';
import { RoleFormType } from '../../../pages/CreateRole/types/RoleFormType';
import { api } from '../api';
import { RolesEndpoints } from './Endpoints';
import { AxiosResponse } from 'axios';


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
    console.log(response)
    const adaptedRoles: RoleModel = RolAdapter(response.data)
    return adaptedRoles;
  } catch (err) {
    throw new Error(JSON.stringify(err));
  }
};

export const postRol = async (data: RoleFormType) => {
  try {

    // TODO: Hacer el adaptador de formRolType a un DTO válido para el backend
    const response = await api.post<AxiosResponse>(
      RolesEndpoints.postRol,
      data,
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};


