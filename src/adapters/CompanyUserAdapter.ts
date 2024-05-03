/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { CompanyUserModel } from '../models';
import { UserAdapter } from './UserAdapter';
export const CompanyUserAdapter = (
  externCompanyUser: any,
): CompanyUserModel => {
  return {
    ...UserAdapter(externCompanyUser),

    companyName: externCompanyUser.companyName,
    companyNit: externCompanyUser.companyNit,
    companyPhone: externCompanyUser.companyPhone,
    companyEmail: externCompanyUser.companyEmail,
    address: externCompanyUser.address,
  };
};
