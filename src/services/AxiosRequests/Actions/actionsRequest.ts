import { api } from '../api';
import { AxiosResponse } from 'axios';
import { actionsEndPoints } from './Endpoints';
import {  ActionsModel } from '../../../models/Actions';
import {  ActionAdapter } from '../../../adapters/ActionAdapder';

export const getAllActions = async (): Promise<ActionsModel[]> => {
  try {
    const response = await api.get(actionsEndPoints.getAllActions);
    const adaptedActions: ActionsModel[] = response.data.map((externalAction: any) =>
      ActionAdapter(externalAction),
    );
    return adaptedActions;
  } catch (err) {
    throw new Error(JSON.stringify(err));
  }
};

export const getActionById = async (id: number): Promise<ActionsModel> => {
  try {
    const response = await api.get(actionsEndPoints.getActionbyId.replace('{idAction}', id.toString()));
    const adaptedAction: ActionsModel = ActionAdapter(response.data);
    return adaptedAction;
  } catch (err) {
    throw new Error(JSON.stringify(err));
  }
};

export const postAction = async (data: ActionsModel) => {
  try {
    const response = await api.post<AxiosResponse>(
      actionsEndPoints.postAction,
      data,
    );
    return response;
  } catch (error) {
    console.error(error);
    throw new Error(JSON.stringify(error));
  }
};

export const putAction = async (data: ActionsModel, id: number) => {
  try {
    const updatedActionData = {
      ...data,
      actionId: id, 
    };

    const response = await api.put<AxiosResponse>(
      actionsEndPoints.putAction,
      updatedActionData,
    );
    return response;
  } catch (error) {
    console.error(error);
    throw new Error(JSON.stringify(error));
  }
};
