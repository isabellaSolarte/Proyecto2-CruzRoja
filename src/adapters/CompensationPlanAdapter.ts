import { CompensationPlanModel } from '../models/CompensationPlan/CompensationPlanModel';
import { ActionAdapter } from './ActionAdapder';

export const CompensationPlanAdapter = (
  externalPlan: any,
): CompensationPlanModel => {
  console.log("externalPlan", externalPlan);
  
  return {
    id: externalPlan.plan.planId,
    name: externalPlan.plan.planName,
    description: externalPlan.plan.planDescription,
    discount: externalPlan.plan.planDiscount,
    actions: externalPlan.plan.actions?.map((action: any) => {
      return {
        action: ActionAdapter(action),
        quantity: action.quantity,
        totalActionPrice: action.totalActionPrice,
        totalActionUfp: action.totalActionUfp,
      };
    }),
    price: externalPlan.planPrice,
    ufpCompensation: externalPlan.totalUfp,
    volunterId: externalPlan.volunterId,
  };
};
