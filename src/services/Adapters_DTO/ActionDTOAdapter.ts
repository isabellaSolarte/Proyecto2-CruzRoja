import { ActionType } from '../../pages/CreateAction/Types/ActionType';

// Define el formato de datos esperado por el servidor (DTO)
interface ActionDTO {
  actionName: string;
  actionDescription: string;
  actionUnitaryPrice: number;
  actionFootPrintUnity: number;
  actionQuantity: number;
}

// Función para adaptar una acción del modelo de la aplicación al formato del servidor
export const adaptActionsModelToDTO = (action: ActionType): ActionDTO => {
  return {
    actionName: action.name,
    actionDescription: action.description,
    actionUnitaryPrice: action.unitaryPrice,
    actionFootPrintUnity: action.footPrintUnity,
    actionQuantity: action.quantity,
  };
};
