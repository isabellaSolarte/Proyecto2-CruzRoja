/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslation } from 'react-i18next';
import { CategoryModel } from '../../../../models';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CoverageResolver from '../schemas/CoverageSchema';
import { CalculatorContext } from '../../../../contexts';

type PollutanSourceCoverage = {
  pollutantId: number;
  categoryId: number;
  id: number;
  name: string;
  totalSources: number | undefined;
  informedSources: number | undefined;
};

const useCoverageForm = (nextStep: () => void) => {
  const { t } = useTranslation('commons');
  const calculator = useContext(CalculatorContext);
  const [adaptedSources, setAdaptedSources] = useState<
    PollutanSourceCoverage[]
  >(extractSourcesFromCategories(calculator.categories));

  const {
    control,
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: { coverage: adaptedSources },
    resolver: yupResolver(CoverageResolver),
  });

  function extractSourcesFromCategories(
    categories: CategoryModel[],
  ): PollutanSourceCoverage[] {
    const sources: PollutanSourceCoverage[] = [];

    categories.forEach(category => {
      category.pollutans.forEach(pollutant => {
        pollutant.sources.forEach(source => {
          sources.push({
            pollutantId: pollutant.id,
            categoryId: category.id,
            totalSources: source.coverage.totalSources,
            informedSources: source.coverage.informedSources,
            id: source.id,
            name: source.name,
          });
        });
      });
    });

    return sources;
  }

  const updateCoveragesCalculatorState = (data: PollutanSourceCoverage[]) => {
    const currentState = calculator.categories;
    data.forEach(formData => {
      const category = currentState.find(d => d.id === formData.categoryId);
      const pollutant = category?.pollutans.find(
        p => p.id === formData.pollutantId,
      );
      const source = pollutant?.sources.find(s => s.id === formData.id);
      if (!source) return;

      source['coverage'] = {
        totalSources: formData.totalSources,
        informedSources: formData.informedSources,
      };
    });

    return currentState;
  };

  const onSubmit = (data: any) => {
    setAdaptedSources(data.coverage);
    const updateCoverage = updateCoveragesCalculatorState(data.coverage);
    calculator.setCalculatorState(updateCoverage);
    nextStep();
  };

  return {
    handleSubmit,
    onSubmit,
    register,
    getValues,
    calculator,
    errors,
    control,
    t,
    adaptedSources,
  };
};

export default useCoverageForm;
