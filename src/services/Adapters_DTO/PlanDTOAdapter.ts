import { CompensationPlanModel } from '../../models/CompensationPlan/CompensationPlanModel';
import { adaptActionsModelToDTO } from './ActionDTOAdapter';

export const PlanDTOAdapter = (plan: CompensationPlanModel) => {
  return {
    planId: plan.id,
    planName: plan.name,
    planDescription: plan.description,
    planDiscount: plan.discount,
    planPrice: plan.price,
    actions: plan.actions.map(adaptActionsModelToDTO),
  };
};
