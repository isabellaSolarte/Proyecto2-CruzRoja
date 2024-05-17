/* eslint-disable no-unused-vars */
import { createContext } from 'react';
import { CategoryModel } from '../../models';

type CalculatorContextType = {
  updateCalculatorState: (newCategories: CategoryModel) => void;
  updateAllCalculatorState: (newCategories: CategoryModel[]) => void;
  getCalculatorState: () => CategoryModel[];
  setCalculatorState: (newState: CategoryModel[]) => void;
};

const CalculatorContext = createContext<CalculatorContextType>({
  updateCalculatorState: () => {},
  getCalculatorState: () => [],
  updateAllCalculatorState: () => {},
  setCalculatorState: () => {},
});

export default CalculatorContext;
