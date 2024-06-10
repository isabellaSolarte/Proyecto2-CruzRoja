import { extractDataCalculatorModel } from '../../models';

interface dataValidateCalculatorDTO {
  pollutionId: number;
  sourceId: number;
  year: number;
  month: number;
  consume: number;
  cost: number;
  informedSources: number;
  sources: number;
}

export const adaptFrontCalculatorModelToDTO = (
  dataValidate: extractDataCalculatorModel[],
): dataValidateCalculatorDTO[] => {
  const filteredData = dataValidate.filter(data => data !== undefined);

  return filteredData.map(data => ({
    pollutionId: data.pollutionId,
    sourceId: data.sourceId,
    month: data.month,
    year: data.year,
    consume: data.consume,
    cost: data.cost,
    informedSources: data.informedSources,
    sources: data.sources,
  }));
};
