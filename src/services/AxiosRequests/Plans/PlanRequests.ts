/* eslint-disable @typescript-eslint/no-explicit-any */
import { CompensationPlanAdapter } from '../../../adapters';
import { CompensationPlanModel } from '../../../models/CompensationPlan/CompensationPlanModel';
import { PlanDTOAdapter } from '../../Adapters_DTO';
import { api } from '../api';
import { PlanEndpoints } from './Endpoints';


export const getAllPlans = async (): Promise<CompensationPlanModel[]> => {
  try {
    const response = await api.get(PlanEndpoints.getAllPlans);
    console.log('Respuesta: ', response);
    
    const adaptedPlans: CompensationPlanModel[] = response.data.map((externalPlan: any) =>
      CompensationPlanAdapter(externalPlan),
    );
    console.log('adaptedPlans',adaptedPlans);
    
    return adaptedPlans;
  } catch (err) {
    throw new Error(JSON.stringify(err));
  }
};

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
  } catch (err) {
    throw new Error(JSON.stringify(err));
  }
};

export const getCompensationPlanById = async (
  planId: number,
): Promise<CompensationPlanModel> => {
  try {
    const response = await api.get(PlanEndpoints.getPlanById(planId));
    const adaptedPlan = CompensationPlanAdapter(response.data);
    return adaptedPlan;
  } catch (err) {
    throw new Error(JSON.stringify(err));
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
  } catch (err) {
    throw new Error(JSON.stringify(err));
  }
};
