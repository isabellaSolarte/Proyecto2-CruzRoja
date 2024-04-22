/* eslint-disable @typescript-eslint/restrict-template-expressions */

export const UsersEndpoints = {
  getAllVolunteers: '/user/volunteers',

  getVolunteer: (id: number): string => `/user/volunteers/${id}`,

  getAllVolunteerPositions: '/user/volunteers/position',

  getAllCompanyUsers: '/user/companies',

  getCompanyUserByNit: (id: number): string => `/user/companies/nit/${id}`,

  getCompanyUserById: (id: number): string =>
    `/user/companies/numberDocument/${id}`,

  postVolunteer: '/user/volunteers',

  postCompanyUser: '/user/companies',

  putVolunteer: '/user/volunteers',

  putCompanyUser: '/user/companies',
};
