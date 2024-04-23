import { Address } from '../LocationModels';
import { UserModel } from './UserModel';

export interface CompanyUserMode extends UserModel {
  companyNit: number;
  companyName: string;
  companyPhone: string;
  companyEmail: string;
  address: Address;
}
