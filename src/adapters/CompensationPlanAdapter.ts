import { CompensationPlanModel } from '../models/CompensationPlan/CompensationPlanModel';
import { ActionAdapter } from './ActionAdapder';

export const CompensationPlanAdapter = (
  externalPlan: any,
): CompensationPlanModel => {
  return {
    id: externalPlan.plan.planId,
    name: externalPlan.plan.planName,
    description: externalPlan.plan.planDescription,
    discount: externalPlan.plan.planDiscount,
    actions: externalPlan.actions.map((action: any) => {
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

export const AcquiredCompensationPlanAdapter = (
  externalPlan: any,
): CompensationPlanModel => {
  return {
    id: externalPlan.planId,
    name: externalPlan.planName,
    description: externalPlan.planDescription,
    discount: externalPlan.planDiscount,
    price: externalPlan.planPrice,
    ufpCompensation: externalPlan.planUfp,
    volunterId: externalPlan.volunteerId,
    isCustom: !externalPlan.planDefault,
    actions: []
  };
};
