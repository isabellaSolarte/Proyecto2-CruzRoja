import { CompensationPlanModel } from '../models/CompensationPlan/CompensationPlanModel';
import { ActionAdapter } from './ActionAdapder';

export const CompensationPlanAdapter = (
  externalPlan: any,
): CompensationPlanModel => {
  console.log('externalPlan', externalPlan);
  return {
    id: externalPlan.planId,
    name: externalPlan.planName,
    description: externalPlan.planDescription,
    discount: externalPlan.planDiscount,
    actions: externalPlan.actions.map(ActionAdapter),
    price: externalPlan.planPrice,
  };
};
