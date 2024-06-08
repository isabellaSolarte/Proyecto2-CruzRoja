import { ActionsModel } from '../models/Actions';

export const ActionAdapter = (externalAction: any): ActionsModel => {
  console.log('externalAction', externalAction);
  return {
    id: externalAction.actionId,
    name: externalAction.actionName,
    description: externalAction.actionDescription,
    unitaryPrice: externalAction.actionUnitaryPrice,
    footPrintUnity: externalAction.actionUfp,
  };
};
