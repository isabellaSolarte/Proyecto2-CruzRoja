import { api } from '../api';
import { CalculatorEndPoints } from './Endpoints';
import { AxiosResponse } from 'axios';
import { adaptFrontCalculatorModelToDTO } from '../../Adapters_DTO/CalculatorDTOAdapter';
import { CalculatorResult, extractDataCalculatorModel } from '../../../models';

export const postDataCalculator = async ( data : extractDataCalculatorModel[] ) : Promise<CalculatorResult> => 
{
    try {
       const dataAdapterCalculator = adaptFrontCalculatorModelToDTO(data);
       
       const response = await api.post<CalculatorResult>(
        CalculatorEndPoints.postDataCalculator,
        dataAdapterCalculator
      );
  
      return response.data;
      
    } catch (error) {
      throw error;
    }
};