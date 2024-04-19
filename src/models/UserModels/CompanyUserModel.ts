import { Address } from '../LocationModels';
import { UserModel } from './UserModel';

export interface CompanyUserMode extends UserModel {
  address: Address;
}
