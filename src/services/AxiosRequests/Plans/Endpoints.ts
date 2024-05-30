export const PlanEndpoints = {
  getAllPlans: '/plans',
  getPlanById: (id: string) => `/plans/id/${id}`,
  getPlanByName: (name: string) => `/plans/id/${name}`,
  postPlan: '/plans',
  putPlan: '/plans',
};
