import { useTranslation } from 'react-i18next';
import { CategoryModel, SourceModel } from '../../../../models';
import { useContext, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { CalculatorContext } from '../../../../contexts';
import PollutionTypeResolver from '../schemas/PollutionTypeSchema';
import { useFieldArray, useForm } from 'react-hook-form';

type PollutanType = {
  pollutionTypeId: number;
  pollutionTypeName : string;
  pollutionTypeDescription: string;
  pollutionTypeUnits: string;
  pollutionTypeEmissionFactor	: number;
  pollutionTypeSources: SourceModel[];
  pollutionTypeState: boolean;
};

const usePollutionTypeForm = () => {
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

    setAdaptedPollutionTypes(data.pollutionType);
    const updatePollutionType = getValues().pollutionType;

    calculator.setCalculatorState(updatePollutionType);
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault(); // Evita la recarga de la página
    void handleSubmit(onSubmit)(event);
    const pollutionTypes: PollutanType[] = [];

    getValues().pollutionType.forEach(category => {
      category.pollutans.forEach(pollutant => {
        if(pollutant.state)
          pollutionTypes.push(pollutant);
      });
    });

    PollutionTypeResolver.validate(pollutionTypes, { abortEarly: false })
      .then(() => {
        calculator.updateFormHasErrors(false);
      })
      .catch(() => {
        calculator.updateFormHasErrors(true);
      });
  };

  const handlePollutionTypeFormData = () => {
    if (calculator.formReference.current) {
      calculator.formReference.current.dispatchEvent(
        new Event('submit', { cancelable: true, bubbles: true }),
      );
    }
  };

  return {
    handleSubmit,
    onSubmit,
    register,
    getValues,
    updatePollutionType,
    handleFormSubmit,
    handlePollutionTypeFormData,
    calculator,
    errors,
    control,
    t,
    reset,
    adaptedPollutionTypes,
  };
};

export default usePollutionTypeForm;
