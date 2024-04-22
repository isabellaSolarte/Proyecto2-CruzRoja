/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { AxiosResponse } from 'axios';
import { CompanyUserMode, VolunterUserModel } from '../../../models';
import { api } from '../api';
import { UsersEndpoints } from './Endpoints';

export const getVolunteers = async (): VolunterUserModel[] => {
  try {
    const response = await api.get(UsersEndpoints.getAllVolunteers);
    //TODO: Adaptar la respuesta con la funcion VolunteerAdapter
    return new Error('Function not implemented yet');
  } catch (error) {
    console.error(error);
  }
};

export const postVolunteer = async (data: VolunterUserModel) => {
  try {
    const response = await api.post<AxiosResponse>(
      UsersEndpoints.postVolunteer,
      data,
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const postUserCompany = async (data: CompanyUserMode) => {
  try {
    const response = await api.post<AxiosResponse>(
      UsersEndpoints.postCompanyUser,
      data,
    );
    return response;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message); // Relanza el error con el mensaje del backend
    } else {
      throw new Error('Error de red al intentar crear usuario');
    }
  }
};
