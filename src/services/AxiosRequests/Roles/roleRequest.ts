import { RolAdapter } from '../../../adapters';
import { RoleModel } from '../../../models';
import { RoleFormType } from '../../../pages/CreateRole/types/RoleFormType';
import { adaptFrontRolModelToDTO } from '../../Adapters_DTO';
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

export const getRolId = async (id: number): Promise<RoleFormType> => {
  try {
    const response = await api.get(`/roles/idRole/${id}`)
    const adaptedRoles: RoleModel = RolAdapter(response.data)
    const adaptedRolData = adaptFrontRolModelToDTO(adaptedRoles);
    return adaptedRolData;
    
  } catch (err) {
    throw new Error(JSON.stringify(err));
  }
};

export const postRol = async (data: RoleFormType) => {

  const permisos = data.permissions.map(permiso => ({
    idPermission: permiso.id,
    name: permiso.name,
    description: permiso.description
  }));

  const RolData = {
    ...data,
    permissions: permisos,
  };

  try {
    //const adaptedRolData = adaptFrontRolModelToDTO(data);
    // TODO: Hacer el adaptador de formRolType a un DTO válido para el backend
    const response = await api.post<AxiosResponse>(
      RolesEndpoints.postRol,
      RolData ,
    );   
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const putRol = async (data: RoleFormType, id: number) => {
  try {
    const permisos = data.permissions.map(permiso => ({
      idPermission: permiso.id,
      name: permiso.name,
      description: permiso.description
    }));

    const updatedRolData = {
      ...data,
      idRole: id, // Usar el id como identificador
      permissions: permisos,
    };

    const response = await api.put<AxiosResponse>(
      RolesEndpoints.putRol,
      updatedRolData,
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error; // Lanzar el error para manejarlo en el componente
  }
};

