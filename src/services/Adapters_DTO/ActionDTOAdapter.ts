import { ActionsModel } from '../../models/Actions';

// Define el formato de datos esperado por el servidor (DTO)
interface ActionDTO {
  actionId: number;
  actionName: string;
  actionDescription: string;
  actionUnitaryPrice: number;
  actionUfp: number;
}

// Función para adaptar una acción del modelo de la aplicación al formato del servidor
export const adaptActionsModelToDTO = (action: ActionsModel): ActionDTO => {
  return {
    actionId: Number(action.id),
    actionName: action.name,
    actionDescription: action.description,
    actionUnitaryPrice: action.unitaryPrice,
    actionUfp: action.footPrintUnity,
  };
};
