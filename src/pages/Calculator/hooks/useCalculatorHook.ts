import { useContext } from 'react';
import { CategoryModel, PollutionUnity } from '../../../models';
import { useTranslation } from 'react-i18next';
import { CalculatorContext } from '../../../contexts';

const useCalculatorHook = () => {
  const { t } = useTranslation('commons');
  const calculator = useContext(CalculatorContext);

  const fetchCategories = () => {
    const fakeData: CategoryModel[] = [
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
                  totalSources: 100,
                  informedSources: 10,
                },
                facturation: {
                  cost: 20000,
                  month: 1,
                },
              },
              {
                id: 2,
                name: 'Source 2 - Pollutant 1',
                description: 'Description of Source 2 - Pollutant 1',
                coverage: {
                  totalSources: 200,
                  informedSources: 12,
                },
                facturation: {
                  cost: 30000,
                  month: 2,
                },
              },
              {
                id: 3,
                name: 'Source 3 - Pollutant 1',
                description: 'Description of Source 3 - Pollutant 1',
                coverage: {
                  totalSources: 30,
                  informedSources: 1,
                },
                facturation: {
                  cost: 34000,
                  month: 3,
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
                  totalSources: 150,
                  informedSources: 12,
                },
                facturation: {
                  cost: 89000,
                  month: 2,
                },
              },
              {
                id: 5,
                name: 'Source 2 - Pollutant 2',
                description: 'Description of Source 2 - Pollutant 2',
                coverage: {
                  totalSources: 234,
                  informedSources: 12,
                },
                facturation: {
                  cost: 54000,
                  month: 1,
                },
              },
              {
                id: 6,
                name: 'Source 3 - Pollutant 2',
                description: 'Description of Source 3 - Pollutant 2',
                coverage: {
                  totalSources: 280,
                  informedSources: 12,
                },
                facturation: {
                  cost: 23000,
                  month: 4,
                },
              },
            ],
          },
        ],
      },
    ];

    calculator.setCalculatorState(fakeData);
  };

  return {
    calculator,
    fetchCategories,
    t,
  };
};

export default useCalculatorHook;
