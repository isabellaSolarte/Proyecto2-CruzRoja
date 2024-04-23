/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { RolAdapter } from '../../../adapters';
import { RoleModel } from '../../../models';
import { api } from '../api';
import { RolesEnpoints } from './Endpoints';

export const getAllRoles = async (): Promise<RoleModel[]> => {
  try {
    const response = await api.get(RolesEnpoints.getAllRoles);
    const adaptedRoles: RoleModel[] = response.data.map((externalRol: any) =>
      RolAdapter(externalRol),
    );
    return adaptedRoles;
  } catch (err) {
    throw new Error(JSON.stringify(err));
  }
};
