// src/types/VolunteerInfo.ts
import { VolunterUserModel } from '../../../models/UserModels/VolunterUserModel';

// Definición del tipo VolunteerInfo utilizando Pick
type VolunteerInfoType = Pick<VolunterUserModel, 'id' | 'names'> & {
  roles: string;
  switchState: boolean;
};

export default VolunteerInfoType;
