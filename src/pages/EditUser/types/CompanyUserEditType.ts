import { CompanyUserModel } from '../../../models';

export type CompanyUserEditType = Omit<
  CompanyUserModel,
  'companyNit' | 'companyName' | 'companyPhone' | 'companyEmail' | 'address'
>;
