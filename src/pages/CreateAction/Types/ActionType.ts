import { ActionsModel } from '../../../models/Actions';

export type ActionType = Omit<ActionsModel, 'id'>;