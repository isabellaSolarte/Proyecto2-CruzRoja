import { api } from '../api';
import { RolesEndpoints } from './Endpoints';

export const getAllRoles = async () => {
  try {
    const response = await api.get(RolesEndpoints.getAllRoles);
    return response;
  } catch (error) {
    console.error(error);
  }
};