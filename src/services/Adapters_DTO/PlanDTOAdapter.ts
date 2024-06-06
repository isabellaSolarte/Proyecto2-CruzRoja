import { CompensationPlanActionModel } from '../../models/Actions';
import { CompensationPlanModel } from '../../models/CompensationPlan/CompensationPlanModel';
import { adaptActionsModelToDTO } from './ActionDTOAdapter';

export const PlanDTOAdapter = (plan: CompensationPlanModel) => {
  return {
    plan: {
      planId: plan.id,
      planName: plan.name,
      planDescription: plan.description,
      planDiscount: plan.discount,
      planPrice: plan.price,
      totalUfp: plan.ufpCompensation,
    },
    actions: plan.actions.map((action: CompensationPlanActionModel) => {
      return {
        action: adaptActionsModelToDTO(action.action),
        amount: action.quantity,
        price: action.totalActionPrice,
        ufp: action.totalActionUfp,
      };
    }),
  };
};
