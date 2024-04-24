import { AxiosResponse } from 'axios';
import { CompanyUserModel, VolunterUserModel } from '../../../models';
import { api } from '../api';
import { UsersEndpoints } from './Endpoints';

import { VolunteerAdapter } from '../../../adapters/VolunteerAdapter';
import { CompanyUserAdapter } from '../../../adapters/CompanyUserAdapter';

export const getVolunteers = async (): Promise<VolunterUserModel[]> => {
  try {
    const response = await api.get<any[]>(UsersEndpoints.getAllVolunteers);
    const adaptedVolunteers: VolunterUserModel[] = response.data.map((volunteer: any) => 
      VolunteerAdapter(volunteer),
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
      documentNumber: data.id, // Usar el documentNumber como identificador
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
    const response = await api.post<AxiosResponse>(
      UsersEndpoints.postVolunteer,
      data,
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
//user-company-rest-controller


///GET
///api/user/companies

export const getCompanies = async (): Promise<CompanyUserModel[]> => {
  try {
    const response = await api.get<CompanyUserModel[]>(UsersEndpoints.getAllCompanyUsers);
    const adaptedCompanies: CompanyUserModel[] = response.data.map((company: CompanyUserModel) => 
      CompanyUserAdapter(company),
    );
    return adaptedCompanies;
  } catch (error) {
    throw new Error(JSON.stringify(error));
  }
};


export const postUserCompany = async (data: CompanyUserModel) => {
  try {
    const response = await api.post<AxiosResponse>(
      UsersEndpoints.postCompanyUser,
      data,
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};