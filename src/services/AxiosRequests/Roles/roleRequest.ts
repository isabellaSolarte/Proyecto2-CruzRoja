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
    console.log(response)
    const adaptedRoles: RoleModel = RolAdapter(response.data)
    const adaptedRolData = adaptFrontRolModelToDTO(adaptedRoles);
    //console.log('Entra correctamente: ', response);
    return adaptedRolData;
    
  } catch (err) {
    throw new Error(JSON.stringify(err));
  }
};

export const postRol = async (data: RoleFormType) => {
  try {
    const adaptedRolData = adaptFrontRolModelToDTO(data);
    console.log(JSON.stringify(adaptedRolData))
    // TODO: Hacer el adaptador de formRolType a un DTO válido para el backend
    const response = await api.post<AxiosResponse>(
      RolesEndpoints.postRol,
      adaptedRolData ,
    );   
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const putVolunteer = async (data: RoleFormType, id: number) => {
  try {
    const updatedRolData = {
      ...data,
      idRole: id, // Usar el id como identificador
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

