import { useState, useContext } from 'react';
import { CategoryModel } from '../../../models';
import {
  getCategoriesEnable,
  postSelectedCategories,
} from '../../../services/AxiosRequests/Categories';
import { CalculatorContext } from '../../../contexts';

export const useCategoriesCalculatorForm = () => {
  const [categoryList, setCategoryList] = useState<CategoryModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [selectedCategory, setSelectedCategories] = useState<number[]>([]);

  const { setCalculatorState, updateSelectedCategories, setIdSelectCategories,selectedIsCategory} = useContext(CalculatorContext);

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
    categoryList,
    selectedIsCategory,
    selectedCategory,
    handleCategorySelect,
    saveSelectedCategories,
    loadCategories,
  };
};
