/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
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
  //TOD: posible implementacion de un custom hook para manejar el estado inicial de las categorias de manera global
  const [categoryList, setCategoryList] = useState<CategoryModel[]>([]);
  const loadCategories = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const categories = await postSelectedCategories(calculator.selectedCategories);
      setCategoryList(categories);
      console.log('categories:', categories);
      console.log('categoryList:', categoryList);
      
      
      setAdaptedSources(extractSourcesFromCategories(calculator.categories, categories));
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  }, [calculator.selectedCategories]); // Add an empty array as the second argument to useCallback

  const filterActivePollutants = (prmCategories: CategoryModel[], prmCategoryList: CategoryModel[]): CategoryModel[] => { 
    
    const filteredprmCategories = prmCategoryList.map(category => {   
      let activePollutants = category.pollutans.filter(pollutant => {
        const matchingCategory = prmCategories.find(c => c.id === category.id);
        const matchingPollutant = matchingCategory?.pollutans.find(p => p.id === pollutant.id);
        return matchingPollutant?.state? true : false;
      });
      activePollutants = activePollutants.map(pollutant => {
        return {
          ...pollutant,
          state: true,
        }});
      return {
        ...category,
        pollutans: activePollutants
      };
    });

    return filteredprmCategories;
  }
  
  
  const extractSourcesFromCategories = (categories: CategoryModel[], categoryList: CategoryModel[]): SourcesType[] => {
    const sources: SourcesType[] = [];
    filterActivePollutants(categories, categoryList).forEach(category => {
      category.pollutans.forEach(pollutant => {
        pollutant.sources.forEach(source => {
          const matchingCategory = categories.find(c => c.id === category.id);          
          const matchingPollutant = matchingCategory?.pollutans.find(p => p.id === pollutant.id);
          const matchingSource = matchingPollutant?.sources.find(s => s.id === source.id);
          sources.push({
            id: source.id,
            name: source.name,
            categoryName: pollutant.name,
            description: source.description,
            state: matchingSource.state,
            coverage: matchingSource.coverage,
            facturation: matchingSource.facturation,
          });
        });
      });
    });
    return sources;
  }
  
  const [adaptedSources, setAdaptedSources] = useState<SourcesType[]>([]);
  
  
  

  const {
    setValue,
    reset,
    handleSubmit,
    register,
    control,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(initialSchemaValidation),
    defaultValues: useMemo(() => {   
      return {sources: adaptedSources};
    }, [adaptedSources, categoryList]),
    
  });

  useEffect(() => {
    void loadCategories();
    reset({sources: adaptedSources})
  }, []);
  
  useEffect(() => {
    setValue('sources', adaptedSources);
  }, [adaptedSources]);

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
    
    return filterActivePollutants(calculator.categories,categoryList).map(category => {
      return {
        ...category,
        pollutans: category.pollutans.map(pollutant => {
          const updatedSources = pollutant.sources.map(source => {
            const sourceToUpdate = data.find(sourceData => sourceData.id === source.id);
            return sourceToUpdate ? { ...source, state: sourceToUpdate.state, coverage: sourceToUpdate.coverage,
              facturation: sourceToUpdate.facturation,  } : source;
          });
          const filteredSources = updatedSources.filter(source => {
            const sourceToUpdate = updatedSources.find(sourceData => sourceData.id === source.id);
            return sourceToUpdate ? sourceToUpdate.state : true;
          });
          return { ...pollutant, sources: filteredSources };
        })
      };
    });
  }

  


  const onSubmit = (data: any) => {
    setIsLoading(true);
    setError(null);

    console.log('submint useSourcesForm data:', data);

    const updateSources = updateSourcesCalculatorState(data.sources as SourcesType[]); 
    console.log('updateSources:', updateSources);
    
    calculator.setCalculatorState(updateSources)

    setIsLoading(false);
    nextStep();
  };


  return {
    t,
    adaptedSources,
    setAdaptedSources,
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
