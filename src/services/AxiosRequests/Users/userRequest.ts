/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from 'axios';
import { CompanyUserMode, VolunterUserModel } from '../../../models';
import { api } from '../api';
import { UsersEndpoints } from './Endpoints';

import { VolunteerAdapter } from '../../../adapters/VolunteerAdapter';
import {
  adaptFrontCompanyUserModelToDTO,
  adaptFrontVolunterUserModelToDTO,
} from '../../Adapters_DTO';
export const getVolunteers = async (): Promise<VolunterUserModel[]> => {
  try {
    const response = await api.get<any[]>(UsersEndpoints.getAllVolunteers);
    const adaptedVolunteers: VolunterUserModel[] = response.data.map(
      (volunteer: any) => VolunteerAdapter(volunteer),
    );
    return adaptedVolunteers;
  } catch (error) {
    throw new Error(JSON.stringify(error));
  }
};
export const putVolunteer = async (data: VolunterUserModel) => {
  try {
    const updatedVolunteerData = {
      ...data,
      documentNumber: Number(data.id), // Usar el documentNumber como identificador
    };
    const response = await api.put<AxiosResponse>(
      UsersEndpoints.putVolunteer,
      updatedVolunteerData,
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error; // Lanzar el error para manejarlo en el componente
  }
};

export const postVolunteer = async (data: VolunterUserModel) => {
  try {
    const newUserData = adaptFrontVolunterUserModelToDTO(data);
    console.log('new user', JSON.stringify(newUserData));

    const response = await api.post<AxiosResponse>(
      UsersEndpoints.postVolunteer,
      newUserData,
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const postUserCompany = async (data: CompanyUserMode) => {
  try {
    const newUserData = adaptFrontCompanyUserModelToDTO(data);
    console.log('new user', JSON.stringify(newUserData));

    const response = await api.post<AxiosResponse>(
      UsersEndpoints.postCompanyUser,
      newUserData,
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
