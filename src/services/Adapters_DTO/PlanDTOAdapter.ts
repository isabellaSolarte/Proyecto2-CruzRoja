import { CompensationPlanModel } from '../../models/CompensationPlan/CompensationPlanModel';
import { adaptActionsModelToDTO } from './ActionDTOAdapter';

export const PlanDTOAdapter = (plan: CompensationPlanModel) => {
  return {
    planName: plan.name,
    planDescription: plan.description,
    planDiscount: 99,
    actions: plan.actions.map(adaptActionsModelToDTO),
  };
};
