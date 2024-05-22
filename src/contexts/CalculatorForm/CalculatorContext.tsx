/* eslint-disable no-unused-vars */
import { createContext } from 'react';
import { CategoryModel } from '../../models';

type CalculatorContextType = {
  categories: CategoryModel[];
  selectedCategories: { ids: number[] };
  selectedIsCategory: number[];
  setIdSelectCategories: (newState: number[]) => void;
  updateSelectedCategories: (newState: number[]) => void;
  updateCalculatorState: (newCategories: CategoryModel) => void;
  updateAllCalculatorState: (newCategories: CategoryModel[]) => void;
  getCalculatorState: () => CategoryModel[];
  setCalculatorState: (newState: CategoryModel[]) => void;
};

const CalculatorContext = createContext<CalculatorContextType>({
  categories: [],
  selectedCategories: { ids: [] },
  selectedIsCategory: [],
  setIdSelectCategories: () => {},
  updateSelectedCategories: () => {},
  updateCalculatorState: () => {},
  getCalculatorState: () => [],
  updateAllCalculatorState: () => {},
  setCalculatorState: () => {},
});

export default CalculatorContext;
