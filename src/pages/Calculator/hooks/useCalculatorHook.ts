import { useContext } from 'react';
import { CategoryModel, PollutionUnity } from '../../../models';
import { useTranslation } from 'react-i18next';
import { CalculatorContext } from '../../../contexts/CalculatorForm';

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
                  totalSources: undefined,
                  informedSources: undefined,
                },
                facturation: {
                  cost: undefined,
                  month: undefined,
                },
              },
              {
                id: 2,
                name: 'Source 2 - Pollutant 1',
                description: 'Description of Source 2 - Pollutant 1',
                coverage: {
                  totalSources: undefined,
                  informedSources: undefined,
                },
                facturation: {
                  cost: undefined,
                  month: undefined,
                },
              },
              {
                id: 3,
                name: 'Source 3 - Pollutant 1',
                description: 'Description of Source 3 - Pollutant 1',
                coverage: {
                  totalSources: undefined,
                  informedSources: undefined,
                },
                facturation: {
                  cost: undefined,
                  month: undefined,
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
                  totalSources: undefined,
                  informedSources: undefined,
                },
                facturation: {
                  cost: undefined,
                  month: undefined,
                },
              },
              {
                id: 5,
                name: 'Source 2 - Pollutant 2',
                description: 'Description of Source 2 - Pollutant 2',
                coverage: {
                  totalSources: undefined,
                  informedSources: undefined,
                },
                facturation: {
                  cost: undefined,
                  month: undefined,
                },
              },
              {
                id: 6,
                name: 'Source 3 - Pollutant 2',
                description: 'Description of Source 3 - Pollutant 2',
                coverage: {
                  totalSources: undefined,
                  informedSources: undefined,
                },
                facturation: {
                  cost: undefined,
                  month: undefined,
                },
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: 'Category 2',
        descripction: 'Description of Category 2',
        scope: 'Scope of Category 2',
        state: false,
        pollutans: [
          {
            id: 3,
            name: 'Pollutant 3',
            description: 'Description of Pollutant 3',
            unity: PollutionUnity.MG,
            emissionFactor: 1.2,
            sources: [
              {
                id: 7,
                name: 'Source 1 - Pollutant 3',
                description: 'Description of Source 1 - Pollutant 3',
                coverage: {
                  totalSources: 5,
                  informedSources: 4,
                },
                facturation: {
                  cost: 200,
                  month: 2,
                },
              },
              {
                id: 8,
                name: 'Source 2 - Pollutant 3',
                description: 'Description of Source 2 - Pollutant 3',
                coverage: {
                  totalSources: 6,
                  informedSources: 5,
                },
                facturation: {
                  cost: 220,
                  month: 2,
                },
              },
              {
                id: 9,
                name: 'Source 3 - Pollutant 3',
                description: 'Description of Source 3 - Pollutant 3',
                coverage: {
                  totalSources: 7,
                  informedSources: 6,
                },
                facturation: {
                  cost: 250,
                  month: 2,
                },
              },
            ],
          },
          {
            id: 4,
            name: 'Pollutant 4',
            description: 'Description of Pollutant 4',
            unity: PollutionUnity.PPM,
            emissionFactor: 0.7,
            sources: [
              {
                id: 10,
                name: 'Source 1 - Pollutant 4',
                description: 'Description of Source 1 - Pollutant 4',
                coverage: {
                  totalSources: 10,
                  informedSources: 7,
                },
                facturation: {
                  cost: 300,
                  month: 2,
                },
              },
              {
                id: 11,
                name: 'Source 2 - Pollutant 4',
                description: 'Description of Source 2 - Pollutant 4',
                coverage: {
                  totalSources: 9,
                  informedSources: 6,
                },
                facturation: {
                  cost: 320,
                  month: 2,
                },
              },
              {
                id: 12,
                name: 'Source 3 - Pollutant 4',
                description: 'Description of Source 3 - Pollutant 4',
                coverage: {
                  totalSources: 8,
                  informedSources: 5,
                },
                facturation: {
                  cost: 350,
                  month: 2,
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
