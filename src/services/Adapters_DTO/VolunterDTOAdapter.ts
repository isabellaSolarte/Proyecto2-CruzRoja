import { VolunterUserModel } from '../../models';
import { RoleFormType } from '../../pages/CreateRole/types/RoleFormType';

interface VolunteerUserModelExternDTO {
  documentNumber: number;
  documentType: string;
  names: string;
  lastNames: string;
  personalPhone: string;
  personalEmail: string;
  username: string;
  password: string;
  roles: Role[];
  state: boolean;
  position: string;
}

interface Role {
  idRole: number;
  typeRole: string;
  permissions: Permission[];
}

interface Permission {
  idPermission: number;
  name: string;
  description: string;
}

export const adaptFrontVolunterUserModelToDTO = (
  volunteer: VolunterUserModel,
): VolunteerUserModelExternDTO => {
  return {
    documentNumber: Number(volunteer.id),
    documentType: volunteer.documentType,
    names: volunteer.names,
    lastNames: volunteer.lastNames,
    personalPhone: volunteer.personalPhone,
    personalEmail: volunteer.personalEmail,
    username: volunteer.username,
    password: volunteer.password,
    roles: volunteer.roles.map(role => ({
      idRole: Number(role.id),
      typeRole: role.typeRole,
      state: role.state,
      permissions: role.permissions.map(permission => ({
        idPermission: permission.id,
        name: permission.name,
        description: permission.description,
      })),
    })),
    state: volunteer.state,
    position: volunteer.position,
  };
};
export const adaptFrontRolModelToDTO = (role: RoleFormType): any => {
  return {
    typeRole: role.typeRole,
    permissions: role.permissions,
  };
};
