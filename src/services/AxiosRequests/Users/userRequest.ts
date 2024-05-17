/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from 'axios';
import { CompanyUserModel, VolunterUserModel } from '../../../models';
import { UsersEndpoints } from './Endpoints';

import { VolunteerAdapter } from '../../../adapters/VolunteerAdapter';
import { CompanyUserAdapter } from '../../../adapters/CompanyUserAdapter';

import {
  adaptFrontCompanyUserModelToDTO,
  adaptFrontVolunterUserModelToDTO,
} from '../../Adapters_DTO';
import { api } from '../api';

export const getVolunteers = async (): Promise<VolunterUserModel[]> => {
  try {
    const response = await api.get<any[]>(UsersEndpoints.getAllVolunteers);

    const adaptedVolunteers: VolunterUserModel[] = response.data.map(
      (volunteer: any) => VolunteerAdapter(volunteer),
    );

    return adaptedVolunteers;
  } catch (error) {
    if (error.response.status === 406) {
      console.error('No hay voluntarios: ', error.response.status);
      return [];
    } else {
      throw error; // Lanzar el error para manejarlo en el componente
    }
  }
};

export const putVolunteer = async (data: VolunterUserModel) => {
  try {
    const updatedVolunteerData = adaptFrontVolunterUserModelToDTO(data);
    updatedVolunteerData.password = 'otracontraseña';

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

    const response = await api.post<AxiosResponse>(
      UsersEndpoints.postVolunteer,
      newUserData,
    );

    return response;
  } catch (error) {
    throw error;
  }
};

export const getCompanies = async (): Promise<CompanyUserModel[]> => {
  try {
    const response = await api.get<CompanyUserModel[]>(
      UsersEndpoints.getAllCompanyUsers,
    );

    const adaptedCompanies: CompanyUserModel[] = response.data.map(
      (company: CompanyUserModel) => CompanyUserAdapter(company),
    );

    return adaptedCompanies;
  } catch (error) {
    if (error.response.status === 406) {
      console.error(
        'No hay representantes de empresas: ',
        error.response.status,
      );
      return [];
    } else {
      throw error; // Lanzar el error para manejarlo en el componente
    }
  }
};

export const postUserCompany = async (data: CompanyUserModel) => {
  try {
    const newUserData = adaptFrontCompanyUserModelToDTO(data);

    const response = await api.post<AxiosResponse>(
      UsersEndpoints.postCompanyUser,
      newUserData,
    );

    return response;
  } catch (error) {
    throw error; // Lanzar el error para manejarlo en el componente
  }
};

export const putUserCompany = async (data: CompanyUserModel) => {
  try {
    const updatedCompanyData = adaptFrontCompanyUserModelToDTO(data);
    updatedCompanyData.password = 'otracontraseña';
    const response = await api.put<AxiosResponse>(
      UsersEndpoints.putCompanyUser,
      updatedCompanyData,
    );

    return response;
  } catch (error) {
    console.error(error);
    throw error; // Lanzar el error para manejarlo en el componente
  }
};

export const getVolunteerById = async (
  id: number,
): Promise<VolunterUserModel> => {
  try {
    const response = await api.get(`/user/volunteers/${id}`);

    const adaptedVolunteer: VolunterUserModel = VolunteerAdapter(response.data);

    return adaptedVolunteer;
  } catch (error) {
    throw new Error(JSON.stringify(error));
  }
};

export const getCompayUserById = async (
  id: number,
): Promise<CompanyUserModel> => {
  try {
    const response = await api.get(UsersEndpoints.getCompanyUserById(id));

    const adaptedCompanyUser: CompanyUserModel = CompanyUserAdapter(
      response.data,
    );

    return adaptedCompanyUser;
  } catch (error) {
    throw new Error(JSON.stringify(error));
  }
};

export const checkUserExist = async (id: number) => {
  try {
    const [volunteer, companyUser] = await Promise.allSettled([
      getVolunteerById(id),
      getCompayUserById(id),
    ]);

    // Verificamos si al menos una solicitud tuvo éxito
    if (volunteer.status === 'fulfilled') return volunteer.value;

    if (companyUser.status === 'fulfilled') return companyUser.value;

    return undefined;
  } catch (error) {
    console.error('Error:', error);
    return undefined;
  }
};
