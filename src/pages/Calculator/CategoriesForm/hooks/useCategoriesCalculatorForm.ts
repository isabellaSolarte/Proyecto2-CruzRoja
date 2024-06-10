import { useState, useContext, useEffect } from 'react';
import { CategoryModel } from '../../../../models';
import {
  getCategoriesEnable,
  postSelectedCategories,
} from '../../../../services/AxiosRequests/Categories';
import { CalculatorContext } from '../../../../contexts';
import CategoriesSchema from '../schemas/categoriesSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

export const useCategoriesCalculatorForm = () => {
  const [categoryList, setCategoryList] = useState<CategoryModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [selectedCategory, setSelectedCategories] = useState<number[]>([]);

  const { setCalculatorState, updateSelectedCategories, setIdSelectCategories,selectedIsCategory} = useContext(CalculatorContext);
  const { control, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(CategoriesSchema),
    defaultValues: {
      selectedCategories: selectedIsCategory,
    },
  });

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    setValue('selectedCategories', selectedIsCategory);
  }, [selectedIsCategory, setValue]);

  const onSubmit = () => {
    saveSelectedCategories();
  };
  const loadCategories = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const categories = await getCategoriesEnable();
      setCategoryList(categories);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleCategorySelect = (idCategory: number) => {
    setSelectedCategories((prevSelected: number[]) => {
      const isAlreadySelected = selectedIsCategory.includes(idCategory);
      const newSelected = isAlreadySelected ? prevSelected.filter((id: number) => id !== idCategory)
        : [...selectedIsCategory, idCategory];
  
      setIdSelectCategories(newSelected);
      return newSelected;
    });
  };
  const saveSelectedCategories = async () => {
    try {
      setIsLoading(true);
      const response = await postSelectedCategories({ ids: selectedCategory });
      updateSelectedCategories(selectedCategory);
      setCalculatorState(response);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    control,
    handleSubmit,
    errors,
    onSubmit,
    categoryList,
    selectedIsCategory,
    selectedCategory,
    handleCategorySelect,
    saveSelectedCategories,
    loadCategories,
  };
};
