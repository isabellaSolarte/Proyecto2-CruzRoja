/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useContext, useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { initialSchemaValidation } from '../Schemas/SourcesSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import SourcesType  from '../types/SourcesType';
import { CalculatorContext } from '../../../../contexts';
import { CategoryModel } from '../../../../models';
import { useTranslation } from 'react-i18next';
import { postSelectedCategories } from '../../../../services/AxiosRequests/Categories';



const useSourcesForm = (nextStep: () => void) => {
  const { t } = useTranslation('commons');
  const calculator = useContext(CalculatorContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [categoryList, setCategoryList] = useState<CategoryModel[]>([]);
  const loadCategories = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    const ids = calculator.categories.map(category => category.id);

    try {
      const categories = await postSelectedCategories({ ids: ids });
      setCategoryList(categories);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  }, [calculator.categories]); // Add an empty array as the second argument to useCallback

  useEffect(() => {
    void loadCategories();
  }, [loadCategories]);
  
  const extractSourcesFromCategories = (categories: CategoryModel[]): SourcesType[] => {
    const sources: SourcesType[] = [];
    console.log('categories:', categories);
    console.log('categoryList:', categoryList);
    
    categories.forEach(category => {
      category.pollutans.forEach(pollutant => {
        pollutant.sources.forEach(source => {
          const matchingCategory = categoryList.find(c => c.id === category.id);          
          const matchingPollutant = matchingCategory?.pollutans.find(p => p.id === pollutant.id);
          const matchingSource = matchingPollutant?.sources.find(s => s.id === source.id);
          const state = matchingSource ? true : false;
          sources.push({
            id: source.id,
            name: source.name,
            categoryName: pollutant.name,
            description: source.description,
            state: state,
            coverage: source.coverage,
            facturation: source.facturation,
          });
        });
      });
    });
    return sources;
  }
  
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
  
  const updateSourcesCalculatorState = (data: SourcesType[]) => {
    console.log('data updateSourcesCalculatorState:', data);
    const currentState = calculator.categories;
    currentState.forEach(category => {
      category.pollutans.forEach(pollutant => {
        pollutant.sources = pollutant.sources.filter(source => {
          const sourceToUpdate = data.find(
            sourceData => sourceData.id === source.id,
          );
          return sourceToUpdate ? sourceToUpdate.state : true;
        });
      });
    });
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
