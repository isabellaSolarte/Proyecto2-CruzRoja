import { PollutantCostModel } from '../PollutantCost';
import { PollutantCoverageModel } from '../PollutantCoverage';

export interface SourceModel {
  id: number;
  name: string;
  categoryName: string;
  description: string;
  state: boolean;
  coverage: PollutantCoverageModel;
  facturation: PollutantCostModel;
}
