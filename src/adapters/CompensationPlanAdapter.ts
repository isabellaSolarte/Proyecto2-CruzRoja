import { CompensationPlanModel } from '../models/CompensationPlan/CompensationPlanModel';
import { ActionAdapter } from './ActionAdapder';

export const CompensationPlanAdapter = (
  externalPlan: any,
): CompensationPlanModel => {
  return {
    id: externalPlan.planId,
    name: externalPlan.planName,
    description: externalPlan.planDescription,
    discount: externalPlan.planDiscount,
    actions: externalPlan.actions.map((action: any) => {
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
