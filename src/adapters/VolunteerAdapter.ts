/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { VolunterUserModel } from '../models';
import { GeneralUserAdapter } from './GeneralUserAdapter';

export const VolunteerAdapter = (externVolunteer: any): VolunterUserModel => {
  return {
    ...GeneralUserAdapter(externVolunteer),
    position: externVolunteer.position,
  };
};
