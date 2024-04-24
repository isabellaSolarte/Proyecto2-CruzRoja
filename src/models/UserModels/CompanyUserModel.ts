import { Address } from '../LocationModels';
import { UserModel } from './UserModel';

export interface CompanyUserModel extends UserModel {
  companyNit: number;
  companyName: string;
  companyPhone: string;
  companyEmail: string;
  address: Address;
}
