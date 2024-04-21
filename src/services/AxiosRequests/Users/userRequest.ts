import { AxiosResponse } from 'axios';
import { CompanyUserMode, VolunterUserModel } from '../../../models';
import { api } from '../api';
import { UsersEndpoints } from './Endpoints';

export const getVolunteers = async () => {
  try {
    const response = await api.get(UsersEndpoints.getAllVolunteers);
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
