import { useState } from 'react';
import { CategoryModel, PollutionUnity } from '../../../models';
import { useTranslation } from 'react-i18next';

const useCalculatorHook = () => {
  const { t } = useTranslation('commons');
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

  // fetch for the inistial state of the calculator
  const fetchCategories = () => {
    const categories: CategoryModel[] = [
      {
        id: 1,
        name: 'Category 1',
        descripction: 'Description of Category 1',
        scope: 'Scope of Category 1',
        pollutans: [
          {
            id: 1,
            name: 'Pollutant 1',
            description: 'Description of Pollutant 1',
            unity: PollutionUnity.KG,
            emissionFactor: 0.5,
            sources: [
              {
                id: 1,
                name: 'Source 1',
                description: 'Description of Source 1',
                state: true,
                coverage: {
                  totalSources: 10,
                  informedSources: 5,
                },
              },
              {
                id: 2,
                name: 'Source 2',
                description: 'Description of Source 2',
                state: true,
                coverage: {
                  totalSources: 8,
                  informedSources: 4,
                },
              },
              {
                id: 3,
                name: 'Source 3',
                description: 'Description of Source 3',
                state: true,
                coverage: {
                  totalSources: 12,
                  informedSources: 6,
                },
              },
            ],
          },
          {
            id: 2,
            name: 'Pollutant 2',
            description: 'Description of Pollutant 2',
            unity: PollutionUnity.GR,
            emissionFactor: 1.2,
            sources: [
              {
                id: 4,
                name: 'Source 4',
                description: 'Description of Source 4',
                state: true,
                coverage: {
                  totalSources: 15,
                  informedSources: 7,
                },
              },
              {
                id: 5,
                name: 'Source 5',
                description: 'Description of Source 5',
                state: true,
                coverage: {
                  totalSources: 20,
                  informedSources: 10,
                },
              },
              {
                id: 6,
                name: 'Source 6',
                description: 'Description of Source 6',
                state: true,
                coverage: {
                  totalSources: 18,
                  informedSources: 9,
                },
              },
            ],
          },
          // Agregar más objetos PollutionTypeModel aquí si es necesario
        ],
      },
      // Agregar más objetos CategoryModel aquí si es necesario
    ];

    console.log(JSON.stringify(categories));
    setCalculatorState(categories);
  };

  return {
    updateCalculatorState,
    updateAllCalculatorState,
    getCalculatorState,
    fetchCategories,
    t,
  };
};

export default useCalculatorHook;
