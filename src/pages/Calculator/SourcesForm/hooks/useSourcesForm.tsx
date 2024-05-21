/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { initialSchemaValidation } from '../Schemas/SourcesSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import SourcesType  from '../types/SourcesType';
import { CalculatorContext } from '../../../../contexts';
import { CategoryModel } from '../../../../models';
import { useTranslation } from 'react-i18next';



const useSourcesForm = (nextStep: () => void) => {
  const { t } = useTranslation('commons');
  const calculator = useContext(CalculatorContext);
  const [adaptedSources, setAdaptedSources] = useState<SourcesType[]>(
    extractSourcesFromCategories(calculator.categories),
  );

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(initialSchemaValidation),
    defaultValues: { sources: adaptedSources },
  });

  const sourcesArray = useFieldArray({
    control,
    name: 'sources',
  });

  const addSource = (source: SourcesType) => {
    const indexToUpdate = sourcesArray.fields.findIndex(field => field.name === source.name);
    sourcesArray.update(indexToUpdate, source);
  };

  const removeSource = (name: string) => {
    const indexToRemove = sourcesArray.fields.findIndex(field => field.name === name);

    if (indexToRemove !== -1) {
      sourcesArray.remove(indexToRemove);
    }
  };

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  
  function extractSourcesFromCategories(categories: CategoryModel[]): SourcesType[] {
    //TODO: Quizas despues deba solo retornar las sources que pertenecen a una categoria con state true
    const sources: SourcesType[] = [];
    categories.forEach(category => {
      category.pollutans.forEach(pollutant => {
        pollutant.sources.forEach(source => {
          sources.push({
            id: source.id,
            name: source.name,
            categoryName: pollutant.name,
            description: pollutant.description,
            state: source.state,
            coverage: source.coverage,
            facturation: source.facturation,
          });
          
        });
      });
    });
    return sources;
  }
  const updateSourcesCalculatorState = (data: SourcesType[]) => {
    console.log('data updateSourcesCalculatorState:', data);
    const currentState = calculator.categories;
    currentState.forEach(category => {
      category.pollutans.forEach(pollutant => {
        pollutant.sources.forEach(source => {
          const sourceToUpdate = data.find(
            sourceData => sourceData.id === source.id,
          );
          if (sourceToUpdate) {
            source.state = sourceToUpdate.state;
          }
        }
        );
      }
      );
    }
    );
    return currentState;
  }
  const onSubmit = (data: any) => {
    setIsLoading(true);
    setError(null);

    console.log('submint useSourcesForm data:', data);

    const updateSources = updateSourcesCalculatorState(data.sources as SourcesType[]); 

    calculator.setCalculatorState(updateSources)

    setIsLoading(false);
    nextStep();
  };


  return {
    t,
    adaptedSources,
    handleSubmit,
    register,
    errors,
    isLoading,
    error,
    onSubmit,
    addSource,
    removeSource,
  };
};

export default useSourcesForm;
