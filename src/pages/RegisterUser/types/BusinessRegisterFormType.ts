import { CompanyUserModel } from '../../../models/UserModels/CompanyUserModel';
export type BusinessRegisterFormType = Pick<
  CompanyUserModel,
  'companyNit' | 'companyName' | 'companyPhone' | 'companyEmail' | 'address'
>;
