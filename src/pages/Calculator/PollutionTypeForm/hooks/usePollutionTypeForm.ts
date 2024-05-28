import { useTranslation } from 'react-i18next';
import { CategoryModel } from '../../../../models';
import { useContext, useState, useCallback, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { CalculatorContext } from '../../../../contexts';
import PollutionTypeResolver from '../schemas/PollutionTypeSchema';
import { useFieldArray, useForm } from 'react-hook-form';
import { postSelectedCategories } from '../../../../services/AxiosRequests/Categories';


const usePollutionTypeForm = (nextStep: () => void) => {
  const { t } = useTranslation('commons');

  const calculator = useContext(CalculatorContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [categoryList, setCategoryList] = useState<CategoryModel[]>([]);
  const loadCategories = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const categories = await postSelectedCategories(calculator.selectedCategories);
      setCategoryList(categories);
      setAdaptedPollutionTypes(extractPollutiontypesFromCategories(calculator.categories, categories));
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  }, [calculator.selectedCategories]); // Add an empty array as the second argument to useCallback
  
  
  const [adaptedPollutionTypes, setAdaptedPollutionTypes] = useState<CategoryModel[]>([]);

  const {
    control,
    setValue,
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
    const updatedCategories = adaptedPollutionTypes.map((category, index) => { 
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
    setAdaptedPollutionTypes(updatedCategories)
    
    update(indexToUpdate, updatedCategories[indexToUpdate]);
  }

  function extractPollutiontypesFromCategories(
    categories: CategoryModel[], categoryList: CategoryModel[]
  ): CategoryModel[] {

    const updatedCategories = categoryList.map(category => {
  
      // Actualizamos los pollutants en la categoría
      const updatedPollutants = category.pollutans.map(pollutant => {
        const matchingCategory = categories.find(c => c.id === category.id);
        const statePollutant = matchingCategory?.pollutans.find(p => p.id === pollutant.id)?.state;   
        const sourcePollutant = matchingCategory?.pollutans.find(p => p.id === pollutant.id);   
        return {
          ...pollutant,
          state: statePollutant? statePollutant: false,
          sources: sourcePollutant? sourcePollutant.sources : pollutant.sources

        };
      });

      return {
        ...category,
        pollutans: updatedPollutants
      };
    });
    
    return updatedCategories;
  }
  
  useEffect(() => {
    void loadCategories();
    reset({'pollutionType': adaptedPollutionTypes});
  }, []);

  useEffect(() => {
    setValue('pollutionType', adaptedPollutionTypes);
  }, [adaptedPollutionTypes]);


  function filterActivePollutants(categories: CategoryModel[]): CategoryModel[] {
    return categories.map(category => {   
      const activePollutants = category.pollutans.filter(pollutant => pollutant.state);
      return {
        ...category,
        pollutans: activePollutants
      };
    }).filter(category => category.pollutans.length > 0 || !category.pollutans);
  }

  const onSubmit = (data: any) => {
    const updatePollutionTypes = filterActivePollutants(getValues().pollutionType);
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