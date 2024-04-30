import {  VolunterUserModel } from '../../../models/UserModels/VolunterUserModel';

export interface VolunteerUserInfo extends Pick< VolunterUserModel, 'documentType' | 'names' | 'lastNames' | 'personalPhone' | 'personalEmail' | 'username'> {
  
}
