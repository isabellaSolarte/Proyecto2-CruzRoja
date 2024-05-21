import { PollutionTypeModel } from '../models';
import SourceAdapter from './SourceAdapter';

const PollutionTypeAdapter = (externarlPollutant: any): PollutionTypeModel => {
  return {
    id: externarlPollutant.pollutionTypeId,
    name: externarlPollutant.pollutionTypeName,
    description: externarlPollutant.pollutionTypeDescription,
    unity: externarlPollutant.pollutionTypeUnits,
    emissionFactor: externarlPollutant.pollutionTypeEmissionFactor,
    sources: externarlPollutant.pollutionSources
      ? externarlPollutant.pollutionSources.map(SourceAdapter)
      : [],
  };
};

export default PollutionTypeAdapter;
