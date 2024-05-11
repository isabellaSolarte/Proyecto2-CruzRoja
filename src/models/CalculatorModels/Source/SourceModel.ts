import { PollutantCoverageModel } from '../PollutantCoverage';

export interface SourceModel {
  id: number;
  categoryName: string;
  name: string;
  description: string;
  state: boolean;
  coverage: PollutantCoverageModel;
}
