/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { VolunterUserModel } from '../models';
import { UserAdapter } from './UserAdapter';

export const VolunteerAdapter = (externVolunteer: any): VolunterUserModel => {
  return {
    ...UserAdapter(externVolunteer),
    position: externVolunteer.position,
  };
};
