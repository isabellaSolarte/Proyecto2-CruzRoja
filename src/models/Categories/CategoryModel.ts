import { PollutionTypeModel } from '../CalculatorModels';

export interface CategoryModel {
  id: number;
  name: string;
  descripction: string;
  scope: string;
  pollutans: PollutionTypeModel[];
}
