/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { CompanyUserModel } from '../models';
export const CompanyUserAdapter = (externCompanyUser: any): CompanyUserModel => {
return {
    id: externCompanyUser.documentNumber,
    documentType: externCompanyUser.documentType,
    names: externCompanyUser.names,
    lastNames: externCompanyUser.lastNames,
    personalPhone: externCompanyUser.personalPhone,
    personalEmail: externCompanyUser.personalEmail,
    username: externCompanyUser.username,
    password: externCompanyUser.password,
    roles: externCompanyUser.roles,
    state: externCompanyUser.state,
    allowedRoutes: externCompanyUser.allowedRoutes,
    
    companyName: externCompanyUser.companyName,
    companyNit: externCompanyUser.companyNit,
    companyPhone: externCompanyUser.companyPhone,
    companyEmail: externCompanyUser.companyEmail,
    address: externCompanyUser.address,
};
}
