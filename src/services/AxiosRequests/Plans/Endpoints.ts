export const PlanEndpoints = {
  getAllPlans: '/plans/actions/default',
  getAllPersonalPlans: (id: number) =>`/plans/actions/custom/${id}`,
  getAllAcquiredPlans: (nit: number) =>`/plans?nit=${nit}`,
  getGenericPlanById: (id: number) => `/plans/actions/${id}`,
  getCustomPlanById: (id: number) => `/plans/actions/custom/${id}`,
  postCustomPlan: '/plans/actions/custommer',
  postGenericPlan: '/plans/actions/default',
  postAcquiredPlan: '/companies/plans',
  putPlan: '/plans/actions',
};
