import { ActionsModel } from '../models/Actions';

export const ActionAdapter = (externalAction: any): ActionsModel => {
  return {
    id: externalAction.actiondId,
    name: externalAction.actionName,
    description: externalAction.actionDescription,
    unitaryPrice: externalAction.actionUnitaryPrice,
    footPrintUnity: externalAction.actionFootPrintUnity,
    quantity: externalAction.actionQuantity,
  };
};
