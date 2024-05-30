/* eslint-disable @typescript-eslint/no-explicit-any */
import { CompensationPlanModel } from '../../../models/CompensationPlan/CompensationPlanModel';
import { PlanDTOAdapter } from '../../Adapters_DTO';
import { api } from '../api';
import { PlanEndpoints } from './Endpoints';

export const postCompensationPlan = async (
  plan: CompensationPlanModel,
): Promise<any> => {
  const data = PlanDTOAdapter(plan);
  console.log(JSON.stringify(data));
  return await api.post<CompensationPlanModel>(PlanEndpoints.postPlan, data);
};
