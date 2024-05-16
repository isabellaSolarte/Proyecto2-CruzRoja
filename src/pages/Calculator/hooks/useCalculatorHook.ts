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
        state: true,
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
                name: 'Source 1 - Pollutant 1',
                description: 'Description of Source 1 - Pollutant 1',
                coverage: {
                  totalSources: 10,
                  informedSources: 5,
                },
                facturation: {
                  cost: 100,
                  month: 1,
                },
              },
              {
                id: 2,
                name: 'Source 2 - Pollutant 1',
                description: 'Description of Source 2 - Pollutant 1',
                coverage: {
                  totalSources: 8,
                  informedSources: 3,
                },
                facturation: {
                  cost: 120,
                  month: 1,
                },
              },
              {
                id: 3,
                name: 'Source 3 - Pollutant 1',
                description: 'Description of Source 3 - Pollutant 1',
                coverage: {
                  totalSources: 12,
                  informedSources: 7,
                },
                facturation: {
                  cost: 150,
                  month: 1,
                },
              },
            ],
          },
          {
            id: 2,
            name: 'Pollutant 2',
            description: 'Description of Pollutant 2',
            unity: PollutionUnity.GR,
            emissionFactor: 0.8,
            sources: [
              {
                id: 4,
                name: 'Source 1 - Pollutant 2',
                description: 'Description of Source 1 - Pollutant 2',
                coverage: {
                  totalSources: 15,
                  informedSources: 8,
                },
                facturation: {
                  cost: 90,
                  month: 1,
                },
              },
              {
                id: 5,
                name: 'Source 2 - Pollutant 2',
                description: 'Description of Source 2 - Pollutant 2',
                coverage: {
                  totalSources: 20,
                  informedSources: 12,
                },
                facturation: {
                  cost: 110,
                  month: 1,
                },
              },
              {
                id: 6,
                name: 'Source 3 - Pollutant 2',
                description: 'Description of Source 3 - Pollutant 2',
                coverage: {
                  totalSources: 18,
                  informedSources: 9,
                },
                facturation: {
                  cost: 130,
                  month: 1,
                },
              },
            ],
          },
        ],
      },
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
