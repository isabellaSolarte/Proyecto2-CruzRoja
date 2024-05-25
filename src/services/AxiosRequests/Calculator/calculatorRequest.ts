/* eslint-disable no-useless-catch */
import { api } from '../api';
import { CalculatorEndPoints } from './Endpoints';
import { adaptFrontCalculatorModelToDTO } from '../../Adapters_DTO/CalculatorDTOAdapter';
import { CalculatorResult, extractDataCalculatorModel } from '../../../models';

export const postDataCalculator = async (
  data: extractDataCalculatorModel[],
): Promise<CalculatorResult> => {
  try {
    console.log('rawData', data);
    const dataAdapterCalculator = adaptFrontCalculatorModelToDTO(data);
    console.log('finalDatad', dataAdapterCalculator);
    const response = await api.post<CalculatorResult>(
      CalculatorEndPoints.postDataCalculator,
      dataAdapterCalculator,
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
