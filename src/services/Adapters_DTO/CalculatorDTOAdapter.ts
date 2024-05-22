import { extractDataCalculatorModel } from "../../models"

interface dataValidateCalculatorDTO
{
    pollutionId : number;
    sourceId : number;
    year : number | undefined;
    month : number | undefined;
    consume : number;
    cost : number | undefined;
    informedSource : number | undefined;
    totalSource : number | undefined;
}

export const adaptFrontCalculatorModelToDTO = (
    dataValidate : extractDataCalculatorModel[]
): dataValidateCalculatorDTO[] =>
{
  const filteredData = dataValidate.filter(data => data !== undefined);
  
  return filteredData.map(data => ({
    pollutionId: data.pollutionId,
    sourceId: data.sourceId,
    year: data.year,
    month: data.month,
    consume: data.consume,
    cost: data.cost,
    informedSource: data.informedSource,
    totalSource: data.sourceId,
  }));
}