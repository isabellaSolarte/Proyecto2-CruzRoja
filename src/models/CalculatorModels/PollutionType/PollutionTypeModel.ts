import { SourceModel } from '../Source';
import { PollutionUnity } from './PollutionUnity';

export interface PollutionTypeModel {
  id: number;
  name: string;
  description: string;
  unity: PollutionUnity | string;
  emissionFactor: number;
  sources: SourceModel[];
}
