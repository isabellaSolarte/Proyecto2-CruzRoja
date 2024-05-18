import { useTranslation } from 'react-i18next';
import { CategoryModel } from '../../../../models';
import { useContext, useState } from 'react';
import { useForm, Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CostsResolver from '../Schemas/CostsAndUsageSchema';
import { CalculatorContext } from '../../../../contexts';

export type PollutantSourceCost = {
  pollutantId: number;
  categoryId: number;
  id: number;
  name: string;
  cost: number | undefined;
  month: number | undefined;
};

const useCostsForm = () => {
  const { t } = useTranslation('commons');
  const calculator = useContext(CalculatorContext);
  const [adaptedSources, setAdaptedSources] = useState<PollutantSourceCost[]>(
    extractSourcesFromCategories(calculator.categories)
  );

  const { control, handleSubmit, register, getValues, formState: { errors } } = useForm<{ costs: PollutantSourceCost[] }>({
    defaultValues: { costs: adaptedSources },
    resolver: yupResolver(CostsResolver) as Resolver<{ costs: PollutantSourceCost[] }>,
  });

  function extractSourcesFromCategories(categories: CategoryModel[]): PollutantSourceCost[] {
    const sources: PollutantSourceCost[] = [];
    categories.forEach(category => {
      category.pollutans.forEach(pollutant => {
        pollutant.sources.forEach(source => {
          sources.push({
            pollutantId: pollutant.id,
            categoryId: category.id,
            cost: source.facturation.cost,
            month: source.facturation.month,
            id: source.id,
            name: source.name,
          });
        });
      });
    });
    return sources;
  }

  const updateCostsCalculatorState = (data: PollutantSourceCost[]) => {
    const currentState = calculator.categories;
    data.forEach(formData => {
      const category = currentState.find(d => d.id === formData.categoryId);
      const pollutant = category?.pollutans.find(p => p.id === formData.pollutantId);
      const source = pollutant?.sources.find(s => s.id === formData.id);
      if (!source) return;
      source.facturation = { cost: formData.cost, month: formData.month };
    });
    return currentState;
  };

  const onSubmit = (data: { costs: PollutantSourceCost[] }) => {
    setAdaptedSources(data.costs);
    const updateCosts = updateCostsCalculatorState(data.costs);
    calculator.setCalculatorState(updateCosts);
  };

  return { handleSubmit, onSubmit, register, getValues, errors, control, t, adaptedSources };
};

export default useCostsForm;