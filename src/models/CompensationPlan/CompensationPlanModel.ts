import { ActionsModel } from '../Actions';

/**
 * @field name: Nombre del plan de compensación
 * @field description: Descripción del plan de compensación
 * @field discount: Descuento total de unidades que se van a descontar o mitigar
 * @field actions: Acciones que se van a realizar para mitigar la huella de carbono
 */
export interface CompensationPlanModel {
  id: number;
  name: string;
  description: string;
  discount: number;
  actions: ActionsModel[];
  price: number;
}
