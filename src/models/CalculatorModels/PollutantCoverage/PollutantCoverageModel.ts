import { PollutantCostModel } from '../PollutantCost/PollutantCostModel';

export interface PollutantCoverageModel {
  totalSouces: number;
  informedSources: number;
  cost: PollutantCostModel;
}
