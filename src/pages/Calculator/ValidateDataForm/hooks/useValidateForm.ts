import { useTranslation } from 'react-i18next';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { CalculatorContext } from '../../../../contexts';
import { CategoryModel } from '../../../../models';
import { PathNames } from '../../../../core';
import { useNavigate } from 'react-router-dom';
import { extractDataCalculatorModel } from '../../../../models';
import { postDataCalculator } from '../../../../services/AxiosRequests/Calculator';
export type PollutantSourcValidate = {
  categoryId: number;
  categoryName: string;
  pollutants: {
    pollutantId: number;
    pollutantName: string;
    sources: {
      id: number;
      name: string;
      coverage: {
        totalSources: number | undefined;
        informedSources: number | undefined;
      };
      facturation: {
        cost: number | undefined;
        month: string;
      };
    }[];
  }[];
};
export interface ValidateDataModel {
  pollutionId: number;
  sourceId: number;
  year: number | undefined;
  month: number | undefined;
  consume: number;
  cost: number | undefined;
  informedSource: number | undefined;
  totalSource: number | undefined;
}
const useValidateForm = () => {
  const { t } = useTranslation('commons');
  const navigate = useNavigate();
  const calculator = useContext(CalculatorContext);
  const [adaptedSources, setAdaptedSources] = useState<
    PollutantSourcValidate[]
  >(extractSourcesFromCategories(calculator.categories));

  const { handleSubmit } = useForm<{ dataV: CategoryModel[] }>({
    defaultValues: { dataV: calculator.categories },
  });
  function extractSourcesFromCategories(
    categories: CategoryModel[],
  ): PollutantSourcValidate[] {
    const sources: PollutantSourcValidate[] = [];
    const monthNames = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ];
    categories.forEach(category => {
      const categoryData: PollutantSourcValidate = {
        categoryId: category.id,
        categoryName: category.name,
        pollutants: [],
      };
      category.pollutans.forEach(pollutant => {
        const pollutantData = {
          pollutantId: pollutant.id,
          pollutantName: pollutant.name,
          sources: pollutant.sources.map(source => ({
            id: source.id,
            name: source.name,
            coverage: {
              totalSources: source.coverage.totalSources,
              informedSources: source.coverage.informedSources,
            },
            facturation: {
              cost: source.facturation.cost,
              month: monthNames[source.facturation.month - 1],
            },
          })),
        };
        categoryData.pollutants.push(pollutantData);
      });
      sources.push(categoryData);
    });
    return sources;
  }
  const onSubmit = async (data: { dataV: CategoryModel[] }) => {
    try {
      const dataValidateResponse = extractValidateFromCategories(data.dataV);
      console.log(dataValidateResponse);
      const calculatorResult = await postDataCalculator(dataValidateResponse);
      navigate(PathNames.CALCULATOR_RESULTS, {
        state: { calculatorResult },
        replace: true,
      });
    } catch (error) {
      alert(`Error al cargar los datos ${JSON.stringify(error)}`);
    }
  };
  function extractValidateFromCategories(
    categories: CategoryModel[],
  ): extractDataCalculatorModel[] {
    const sources: extractDataCalculatorModel[] = [];
    categories.forEach(category => {
      category.pollutans.forEach(pollutant => {
        pollutant.sources.forEach(source => {
          sources.push({
            pollutionId: pollutant.id,
            sourceId: source.id,
            year: source.facturation.year,
            month: source.facturation.month,
            consume: 10,
            cost: source.facturation.cost,
            informedSource: source.coverage.informedSources,
            totalSource: source.coverage.totalSources,
          });
        });
      });
    });
    return sources;
  }

  return { t, adaptedSources, onSubmit, handleSubmit };
};
export default useValidateForm;
