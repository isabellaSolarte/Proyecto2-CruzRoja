import React, { useRef, useState } from 'react';
import { CategoryModel } from '../../models';
import CalculatorContext from './CalculatorContext';

const CalculatorFormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  /**
   * Esta estructura se puede separar en estados para cada formulario, pero por simplicidad y tiempo se mantiene en un solo estado.
   */
  const [categories, setCategories] = useState<CategoryModel[]>([]);
  const formReference = useRef<HTMLFormElement | null>(null);
  const [formHasErrors, setFormHasErrors] = useState<boolean>(false);

  const setCalculatorState = (newState: CategoryModel[]) => {
    setCategories(newState);
  };

  const updateCalculatorState = (newState: CategoryModel) => {
    const updateState = categories.map(category => {
      if (category.id === newState.id) return { ...category, ...newState };
      return category;
    });
    setCategories(updateState);
  };

  const updateAllCalculatorState = (newState: CategoryModel[]) => {
    const updateState = categories.map(category => {
      const newCategory = newState.find(newCategory => newCategory.id === category.id);
      if (newCategory) newCategory;
      return category;
    });
    setCategories(updateState);
  };

  const getCalculatorState = (): CategoryModel[] => {
    return categories;
  };

  const updateFormHasErrors = (hasErrors: boolean) => {
    console.log('hasErrors', hasErrors);
    setFormHasErrors(hasErrors);
  };

  return (
    <CalculatorContext.Provider
      value={{
        categories,
        formReference,
        formHasErrors,
        updateFormHasErrors,
        updateCalculatorState,
        getCalculatorState,
        updateAllCalculatorState,
        setCalculatorState,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorFormProvider;
