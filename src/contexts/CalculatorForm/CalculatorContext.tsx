/* eslint-disable no-unused-vars */
import { createContext } from 'react';
import { CategoryModel } from '../../models';
import { CategoryWithRelation } from '../../models/CalculatorModels/Category';

type CalculatorContextType = {
  categories: CategoryModel[];
  updateCalculatorState: (newCategories: CategoryModel) => void;
  updateAllCalculatorState: (newCategories: CategoryWithRelation[]) => void;
  getCalculatorState: () => CategoryModel[];
  setCalculatorState: (newState: CategoryModel[]) => void;
};

const CalculatorContext = createContext<CalculatorContextType>({
  categories: [],
  updateCalculatorState: () => {},
  getCalculatorState: () => [],
  updateAllCalculatorState: () => {},
  setCalculatorState: () => {},
});

export default CalculatorContext;
