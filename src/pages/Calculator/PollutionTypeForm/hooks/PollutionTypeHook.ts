/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslation } from 'react-i18next';
import { CategoryModel, SourceModel } from '../../../../models';
import { useContext, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import CoverageResolver from '../schemas/CoverageSchema';
import { CalculatorContext } from '../../../../contexts';
import PollutionTypeResolver from '../schemas/PollutionTypeSchema';
import { useFieldArray, useForm } from 'react-hook-form';
import { PollutionTypeModel } from '../../../../models';


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

  const [pollutionTypeList, setPollutionTypeList] = useState<PollutionTypeModel[]>([]);

  const calculator = useContext(CalculatorContext);
  const [adaptedPollutionTypes, setAdaptedPollutionTypes] = useState<
  PollutanType[]
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

  const { fields, append, update, remove } = useFieldArray({
    control,
    name: 'pollutionType',
  });


  const addPollutionType = (newPollutionType: PollutionTypeModel) => {
    append(newPollutionType);
    register(`pollutionType.${fields.length}.id`);
    console.log('getValues add: ', getValues());
  };

  const removePollutionType = (pollutionTypeName: string) => {
    const indexToRemove = fields.findIndex(field => field.name === pollutionTypeName);
    
    if (indexToRemove !== -1) {
      remove(indexToRemove);
      console.log('getValues remove: ', getValues());
    }
  };

  function extractPollutiontypesFromCategories(
    categories: CategoryModel[],
  ): PollutanType[] {
    const pollutionTypes: PollutanType[] = [];
    console.log(categories);

    categories?.forEach(category => {
      category.pollutans.forEach(pollutant => {
        pollutionTypes.push({
          pollutionTypeId: pollutant.id,
          pollutionTypeName: pollutant.name,
          pollutionTypeDescription: pollutant.description,
          pollutionTypeUnits: pollutant.unity,
          pollutionTypeEmissionFactor: pollutant.emissionFactor,
          pollutionTypeSources: pollutant.sources,
          pollutionTypeState: pollutant.state,
        });
      });
    });

    return pollutionTypes;
  }

  const updatePollutionTypesCalculatorState = (data: PollutanType[]) => {
    const currentState = calculator.categories;
    data.forEach(formData => {
      const category = currentState.find(d => d.id === formData.pollutionTypeId);

      let pollutant = category?.pollutans.find(
        p => p.id === formData.pollutionTypeId,
      );
      if (!pollutant) return;
      pollutant = {
        ...pollutant,
        state: true
      }
    });

    return currentState;
  };


  const onSubmit = (data: any) => {
    setAdaptedPollutionTypes(data);
    const updatePollutionType = updatePollutionTypesCalculatorState(data);
    calculator.setCalculatorState(updatePollutionType);
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault(); // Evita la recarga de la página
    void handleSubmit(onSubmit)(event);

    PollutionTypeResolver.validate(getValues(), { abortEarly: false })
      .then(() => {
        calculator.updateFormHasErrors(false);
      })
      .catch(() => {
        calculator.updateFormHasErrors(true);
      });
    //calculator.updateFormHasErrors(Object.keys(errors).length > 0);
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
    addPollutionType,
    removePollutionType,
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
