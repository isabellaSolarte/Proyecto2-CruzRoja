import { CompanyUserMode } from '../../../models/UserModels/CompanyUserModel';
export type BusinessRegisterFormType = Pick<
  CompanyUserMode,
  'companyNit' | 'companyName' | 'companyPhone' | 'companyEmail' | 'address'
>;
