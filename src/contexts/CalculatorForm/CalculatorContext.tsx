/* eslint-disable no-unused-vars */
import { createContext } from 'react';
import { CategoryModel } from '../../models';

type CalculatorContextType = {
  categories: CategoryModel[];
  selectedCategories: { ids: number[] };
  updateSelectedCategories: (newState: number[]) => void;
  updateCalculatorState: (newCategories: CategoryModel) => void;
  updateAllCalculatorState: (newCategories: CategoryModel[]) => void;
  getCalculatorState: () => CategoryModel[];
  setCalculatorState: (newState: CategoryModel[]) => void;
};

const CalculatorContext = createContext<CalculatorContextType>({
  categories: [],
  selectedCategories: { ids: [] },
  updateSelectedCategories: () => {},
  updateCalculatorState: () => {},
  getCalculatorState: () => [],
  updateAllCalculatorState: () => {},
  setCalculatorState: () => {},
});

export default CalculatorContext;
