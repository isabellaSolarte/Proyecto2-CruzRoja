import { useTranslation } from 'react-i18next';
import { CategoryModel } from '../../../../models';
import { useContext, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { CalculatorContext } from '../../../../contexts';
import PollutionTypeResolver from '../schemas/PollutionTypeSchema';
import { useFieldArray, useForm } from 'react-hook-form';

const usePollutionTypeForm = (nextStep: () => void) => {
  const { t } = useTranslation('commons');

  const calculator = useContext(CalculatorContext);
  const [adaptedPollutionTypes, setAdaptedPollutionTypes] = useState<
  CategoryModel[]
  >(extractPollutiontypesFromCategories(calculator.categories));
  

  const {
    control,
    handleSubmit,
    register,
    getValues,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { pollutionType: adaptedPollutionTypes },
    resolver: yupResolver(PollutionTypeResolver),
  });
  
  const { update } = useFieldArray({
    control,
    name: 'pollutionType',
  });

  const updatePollutionType = (polllutionTypeName: string, pollutionTypeState: boolean)=>{
    let indexToUpdate = 0;

    console.log('updatePollutionType: ', polllutionTypeName);
    
    const updatedCategories = getValues().pollutionType.map((category, index) => { 
      const updatedPollutants = category?.pollutans.map(pollutant => {
        if(pollutant.name === polllutionTypeName){
          indexToUpdate = index
        }
        if(polllutionTypeName === pollutant.name){
          return {...pollutant, state: pollutionTypeState}
        }else{
          return {...pollutant}
        }
      });
      // Retornamos la categoría actualizada con los pollutants modificados
      return {
        ...category,
        pollutans: updatedPollutants
      };
    });
      update(indexToUpdate, updatedCategories[indexToUpdate]);
  }

  function extractPollutiontypesFromCategories(
    categories: CategoryModel[],
  ): CategoryModel[] {
  console.log('caregories: ', categories);
  
    const updatedCategories = categories.map(category => {
  
      // Actualizamos los pollutants en la categoría
      const updatedPollutants = category.pollutans.map(pollutant => {
        return {
          ...pollutant,
            state: pollutant.state === undefined ? false : pollutant.state
        };
      });
      // Retornamos la categoría actualizada con los pollutants modificados
      return {
        ...category,
        pollutans: updatedPollutants
      };
    });
    return updatedCategories;
  }
  

  const onSubmit = (data: any) => {
    setAdaptedPollutionTypes(data);
    const updatePollutionTypes = getValues().pollutionType;
    calculator.setCalculatorState(updatePollutionTypes);
    nextStep();
  };

  return {
    handleSubmit,
    onSubmit,
    register,
    getValues,
    updatePollutionType,
    calculator,
    errors,
    control,
    t,
    reset,
    adaptedPollutionTypes,
  };
};

export default usePollutionTypeForm;
