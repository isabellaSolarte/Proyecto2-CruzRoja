/* eslint-disable @typescript-eslint/no-explicit-any */
import { CompensationPlanAdapter } from '../../../adapters';
import { CompensationPlanModel } from '../../../models/CompensationPlan/CompensationPlanModel';
import { PlanDTOAdapter } from '../../Adapters_DTO';
import { api } from '../api';
import { PlanEndpoints } from './Endpoints';

export const postCompensationPlan = async (
  plan: CompensationPlanModel,
): Promise<any> => {
  try {
    const data = PlanDTOAdapter(plan);
    console.log(JSON.stringify(data));
    const response = await api.post<CompensationPlanModel>(
      plan.volunterId
        ? PlanEndpoints.postCustomPlan
        : PlanEndpoints.postGenericPlan,
      data,
      {
        params: {
          volunterId: plan.volunterId,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getCompensationPlanById = async (
  planId: number,
  planType: 'custom' | 'generic',
): Promise<CompensationPlanModel> => {
  try {
    const response = await api.get(
      planType === 'custom'
        ? PlanEndpoints.getCustomPlanById(planId)
        : PlanEndpoints.getGenericPlanById(planId),
    );
    const adaptedPlan = CompensationPlanAdapter(response.data);
    return adaptedPlan;
  } catch (error) {
    throw new Error(error);
  }
};

export const putCompensationPlan = async (
  updatePlan: CompensationPlanModel,
) => {
  try {
    const data = PlanDTOAdapter(updatePlan);
    const response = await api.post<CompensationPlanModel>(
      PlanEndpoints.putPlan,
      data,
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
