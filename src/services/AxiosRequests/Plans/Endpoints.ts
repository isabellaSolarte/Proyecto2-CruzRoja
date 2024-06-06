export const PlanEndpoints = {
  getAllPlans: '/plans/actions',
  getGenericPlanById: (id: number) => `/plans/actions/${id}`,
  getCustomPlanById: (id: number) => `/plans/actions/custom/${id}`,
  postCustomPlan: '/plans/actions/customer',
  postGenericPlan: '/plans/actions/default',
  putPlan: '/plans/actions',
};
