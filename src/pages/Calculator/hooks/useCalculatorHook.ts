import { useState } from 'react';
import { CategoryModel } from '../../../models';

const useCalculatorHook = () => {
  const [calculatorState, setCalculatorState] = useState<CategoryModel[]>([]);

  const updateCalculatorState = (newState: CategoryModel) => {
    const updateState = calculatorState.map(category => {
      if (category.id === newState.id) return { ...category, ...newState };
      return category;
    });
    setCalculatorState(updateState);
  };

  const getCalculatorState = () => {
    return calculatorState;
  };

  const updateAllCalculatorState = (newState: CategoryModel[]) => {
    const updateState = calculatorState.map(category => {
      const newCategory = newState.find(
        newCategory => newCategory.id === category.id,
      );
      if (newCategory) return { ...category, ...newCategory };
      return category;
    });
    setCalculatorState(updateState);
  };

  return {
    updateCalculatorState,
    updateAllCalculatorState,
    getCalculatorState,
  };
};

export default useCalculatorHook;
