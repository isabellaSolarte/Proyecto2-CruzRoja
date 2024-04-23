import { AxiosResponse } from 'axios';
import { CompanyUserMode, VolunterUserModel } from '../../../models';
import { api } from '../api';
import { UsersEndpoints } from './Endpoints';

import { VolunteerAdapter } from '../../../adapters/VolunteerAdapter';
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
    const response = await api.put<AxiosResponse>(
      UsersEndpoints.putVolunteer,
      data,
    );
    return response;
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
  } catch (error) {
    console.error(error);
  }
};