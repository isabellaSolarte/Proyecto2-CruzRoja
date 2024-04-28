/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from 'axios';
import { CompanyUserModel, VolunterUserModel } from '../../../models';
import { api } from '../api';
import { UsersEndpoints } from './Endpoints';

import { VolunteerAdapter } from '../../../adapters/VolunteerAdapter';
import { CompanyUserAdapter } from '../../../adapters/CompanyUserAdapter';

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
    throw new Error(JSON.stringify(error));
  }
};

export const postUserCompany = async (data: CompanyUserModel) => {
  try {
    const newUserData = adaptFrontCompanyUserModelToDTO(data);
    console.log('new user', JSON.stringify(newUserData));

    const response = await api.post<AxiosResponse>(
      UsersEndpoints.postCompanyUser,
      newUserData,
    );
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const putUserCompany = async (data: CompanyUserModel) => {
  try {
    const updatedCompanyData = {
      ...data,
      documentNumber: data.id, // Usar el documentNumber como identificador
    };
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
