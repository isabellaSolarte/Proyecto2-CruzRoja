import { CompanyUserModel } from '../../models';

export interface CompanyUsetDTOModel {
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
  companyNit: number;
  companyName: string;
  companyPhone: string;
  companyEmail: string;
  address: Address;
}

export interface Address {
  street: string;
  number: string;
  floorOrApartment: string;
  neighborhood: string;
  city: string;
  country: string;
}

export interface Role {
  idRole: number;
  typeRole: string;
  permissions: Permission[];
}

export interface Permission {
  idPermission: number;
  name: string;
  description: string;
}

export const adaptFrontCompanyUserModelToDTO = (
  user: CompanyUserModel,
): CompanyUsetDTOModel => {
  return {
    documentNumber: Number(user.id),
    documentType: user.documentType,
    names: user.names,
    lastNames: user.lastNames,
    personalPhone: user.personalPhone,
    personalEmail: user.personalEmail,
    username: user.username,
    password: user.password,
    roles: user.roles.map(role => ({
      idRole: Number(role.id),
      typeRole: role.typeRole,
      state: role.state,
      permissions: role.permissions.map(permission => ({
        idPermission: Number(permission.id),
        name: permission.name,
        description: permission.description,
      })),
    })),
    state: user.state,
    companyNit: Number(user.companyNit),
    companyName: user.companyName,
    companyPhone: user.companyPhone,
    companyEmail: user.companyEmail,
    address: {
      street: user.address.street,
      number: user.address.number,
      floorOrApartment: user.address.floorOrApartment,
      neighborhood: user.address.neighborhood,
      city: user.address.city,
      country: user.address.country,
    },
  };
};
