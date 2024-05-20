import { PollutantCostModel, PollutantCoverageModel, SourceModel } from '../../../../models';

type SourcesType = {
  id: number;
  name: string;
  description: string;
  categoryName: string;
  state: boolean;
  coverage: PollutantCoverageModel;
  facturation: PollutantCostModel;
};

export default SourcesType;
