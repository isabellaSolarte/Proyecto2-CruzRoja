import { ActionsModel } from "../../../../models/Actions";

export type ActionType = {
    id: number;
    name: string;
    description: string;
    unitaryPrice: number;
    footPrintUnity: number;
    quantity: number;
}
  