import { api } from '../api';
import { ActionsModel } from '../../../models/Actions';
import { adaptActionsModelToDTO } from '../../Adapters_DTO/ActionDTOAdapter';
import { AxiosResponse } from 'axios';
import { actionsEndPoints } from './Endpoints';
import { ActionAdapter } from '../../../adapters/ActionAdapder';
import { ActionType } from '../../../pages/CreateAction/Types/ActionType';

export const getAllActions = async (): Promise<ActionsModel[]> => {
  try {
    const response = await api.get<any[]>(actionsEndPoints.getAllActions);
    const adaptedActions: ActionsModel[] = response.data.map(
      (action: any) => ActionAdapter(action),
    );
    return adaptedActions;
  } catch (error) {
    throw new Error(JSON.stringify(error));
  }
};

export const getActionById = async (id: number): Promise<ActionsModel> => {
  try {
    const response = await api.get(`/actions/id/${id}`);
    const adaptedAction: ActionsModel = ActionAdapter(response.data);
    return adaptedAction;
  } catch (error) {
    throw new Error(JSON.stringify(error));
  }
};

export const postAction = async (data: ActionType) => {
  try {
    const adaptedAction = adaptActionsModelToDTO(data);
    console.log('PostData:', adaptedAction);
    const response = await api.post<AxiosResponse>(
      actionsEndPoints.postAction,
      adaptedAction,
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const putAction = async (data: ActionType, id: number) => {
  try {
    const adaptedAction = adaptActionsModelToDTO(data);
    console.log('AdaptedAction:', adaptedAction);
    const updatedActionData = {
      ...adaptedAction,
      actionId: id,
    };
    console.log('PutData:', updatedActionData);
    const response = await api.put<AxiosResponse>(
      actionsEndPoints.putAction,
      updatedActionData,
    );
    return response;
  } catch (error) {
    throw error;
  }
};
