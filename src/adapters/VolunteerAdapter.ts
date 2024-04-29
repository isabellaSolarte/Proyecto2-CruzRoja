/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { VolunterUserModel } from '../models';
import { RolAdapter } from './RoleAdapter';

export const VolunteerAdapter = (externVolunteer: any): VolunterUserModel => {
  return {
    id: externVolunteer.documentNumber,
    documentType: externVolunteer.documentType,
    names: externVolunteer.names,
    lastNames: externVolunteer.lastNames,
    personalPhone: externVolunteer.personalPhone,
    personalEmail: externVolunteer.personalEmail,
    username: externVolunteer.username,
    password: externVolunteer.password,
    roles: externVolunteer.roles.map((role: any) => RolAdapter(role)),
    state: externVolunteer.state,
    allowedRoutes: externVolunteer.allowedRoutes,
    position: externVolunteer.position,
  };
};
