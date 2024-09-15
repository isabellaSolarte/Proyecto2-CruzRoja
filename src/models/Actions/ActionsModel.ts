export interface ActionsModel {
  id: number;
  name: string;
  description: string;
  unitaryPrice: number;
  footPrintUnity: number;
}

export interface CompensationPlanActionModel {
  action: ActionsModel;
  quantity: number;
  totalActionPrice: number;
  totalActionUfp: number;
}
