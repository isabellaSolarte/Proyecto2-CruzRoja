import { CompensationPlanModel } from '../models/CompensationPlan/CompensationPlanModel';
import { ActionAdapter } from './ActionAdapder';

export const CompensationPlanAdapter = (
  externalPlan: any,
): CompensationPlanModel => {
  console.log('externalPlan', externalPlan);
  return {
    id: externalPlan.plan.planId,
    name: externalPlan.plan.planName,
    description: externalPlan.plan.planDescription,
    discount: externalPlan.plan.planDiscount,
    actions: externalPlan.actions.map((action: any) => {
      console.log('action', action);
      return {
        action: ActionAdapter(action.action),
        quantity: action.amount,
        totalActionPrice: action.price,
        totalActionUfp: action.ufp,
      };
    }),
    price: externalPlan.plan.planPrice,
    ufpCompensation: externalPlan.plan.planUfp,
    volunterId: externalPlan.plan.volunteerId,
    isCustom: !externalPlan.plan.planDefault,
  };
};
