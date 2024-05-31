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
    const response = await api.post<CompensationPlanModel>(
      PlanEndpoints.postPlan,
      data,
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getCompensationPlanById = async (
  planId: number,
): Promise<CompensationPlanModel> => {
  try {
    const response = await api.get(PlanEndpoints.getPlanById(planId));
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