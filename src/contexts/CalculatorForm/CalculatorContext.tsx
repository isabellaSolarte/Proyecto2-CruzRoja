/* eslint-disable no-unused-vars */
import { MutableRefObject, createContext } from 'react';
import { CategoryModel } from '../../models';
import { CategoryWithRelation } from '../../models/CalculatorModels/Category';

type CalculatorContextType = {
  categories: CategoryModel[];
  selectedCategories: number[];
  formReference: MutableRefObject<HTMLFormElement | null>;
  formHasErrors: boolean;
  setCategoriesState: (newSelectedCategories: number[]) => void;
  updateFormHasErrors: (hasErrors: boolean) => void;
  updateCalculatorState: (newCategories: CategoryModel) => void;
  updateAllCalculatorState: (newCategories: CategoryModel[]) => void;
  getCalculatorState: () => CategoryModel[];
  setCalculatorState: (newState: CategoryModel[]) => void;
};

const CalculatorContext = createContext<CalculatorContextType>({
  categories: [],
  selectedCategories: [],
  formReference: { current: null },
  formHasErrors: false,
  setCategoriesState: () => {},
  updateFormHasErrors: () => {},
  updateCalculatorState: () => {},
  getCalculatorState: () => [],
  updateAllCalculatorState: () => {},
  setCalculatorState: () => {},
});

export default CalculatorContext;
