import { PollutantCoverageModel } from '../PollutantCoverage';

export interface SourceModel {
  id: number;
  sourecTypeId: number;
  name: string;
  description: string;
  categoryId: number;
  coverage: PollutantCoverageModel[];
}
