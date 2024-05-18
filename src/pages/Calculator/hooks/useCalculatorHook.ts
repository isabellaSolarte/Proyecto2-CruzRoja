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
                  cost: 100,
                  month: 1,
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
                  cost: 120,
                  month: 1,
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
                  totalSources: undefined,
                  informedSources: undefined,
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
                  totalSources: undefined,
                  informedSources: undefined,
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
                  totalSources: undefined,
                  informedSources: undefined,
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
                  totalSources: undefined,
                  informedSources: undefined,
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
                  totalSources: undefined,
                  informedSources: undefined,
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
                  totalSources: undefined,
                  informedSources: undefined,
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
                  totalSources: undefined,
                  informedSources: undefined,
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
                  totalSources: undefined,
                  informedSources: undefined,
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
                  totalSources: undefined,
                  informedSources: undefined,
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
      {
        id: 3,
        name: 'Category 3',
        descripction: 'Description of Category 3',
        scope: 'Scope of Category 3',
        state: true,
        pollutans: [
          {
            id: 5,
            name: 'Pollutant 5',
            description: 'Description of Pollutant 5',
            unity: PollutionUnity.UG,
            emissionFactor: 1.5,
            sources: [
              {
                id: 13,
                name: 'Source 1 - Pollutant 5',
                description: 'Description of Source 1 - Pollutant 5',
                coverage: {
                  totalSources: undefined,
                  informedSources: undefined,
                },
                facturation: {
                  cost: 400,
                  month: 3,
                },
              },
              {
                id: 14,
                name: 'Source 2 - Pollutant 5',
                description: 'Description of Source 2 - Pollutant 5',
                coverage: {
                  totalSources: undefined,
                  informedSources: undefined,
                },
                facturation: {
                  cost: 420,
                  month: 3,
                },
              },
              {
                id: 15,
                name: 'Source 3 - Pollutant 5',
                description: 'Description of Source 3 - Pollutant 5',
                coverage: {
                  totalSources: undefined,
                  informedSources: undefined,
                },
                facturation: {
                  cost: 450,
                  month: 3,
                },
              },
            ],
          },
          {
            id: 6,
            name: 'Pollutant 6',
            description: 'Description of Pollutant 6',
            unity: PollutionUnity.PPB,
            emissionFactor: 2.0,
            sources: [
              {
                id: 16,
                name: 'Source 1 - Pollutant 6',
                description: 'Description of Source 1 - Pollutant 6',
                coverage: {
                  totalSources: undefined,
                  informedSources: undefined,
                },
                facturation: {
                  cost: 500,
                  month: 3,
                },
              },
              {
                id: 17,
                name: 'Source 2 - Pollutant 6',
                description: 'Description of Source 2 - Pollutant 6',
                coverage: {
                  totalSources: undefined,
                  informedSources: undefined,
                },
                facturation: {
                  cost: 520,
                  month: 3,
                },
              },
              {
                id: 18,
                name: 'Source 3 - Pollutant 6',
                description: 'Description of Source 3 - Pollutant 6',
                coverage: {
                  totalSources: undefined,
                  informedSources: undefined,
                },
                facturation: {
                  cost: 550,
                  month: 3,
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
    fetchCategories,
    t,
  };
};

export default useCalculatorHook;
