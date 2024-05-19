/* eslint-disable no-unused-vars */
import { MutableRefObject, createContext } from 'react';
import { CategoryModel } from '../../models';

type CalculatorContextType = {
  categories: CategoryModel[];
  formReference: MutableRefObject<HTMLFormElement | null>;
  formHasErrors: boolean;
  updateFormHasErrors: (hasErrors: boolean) => void;
  updateCalculatorState: (newCategories: CategoryModel) => void;
  updateAllCalculatorState: (newCategories: CategoryModel[]) => void;
  getCalculatorState: () => CategoryModel[];
  setCalculatorState: (newState: CategoryModel[]) => void;
};

const CalculatorContext = createContext<CalculatorContextType>({
  categories: [],
  formReference: { current: null },
  formHasErrors: false,
  updateFormHasErrors: () => {},
  updateCalculatorState: () => {},
  getCalculatorState: () => [],
  updateAllCalculatorState: () => {},
  setCalculatorState: () => {},
});

export default CalculatorContext;