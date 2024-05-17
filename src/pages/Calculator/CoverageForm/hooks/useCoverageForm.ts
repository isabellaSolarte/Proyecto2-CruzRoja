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
  totalSources: number;
  informedSources: number;
};

const useCoverageForm = () => {
  const { t } = useTranslation('commons');
  const calculator = useContext(CalculatorContext);
  const [adaptedSources, setAdaptedSources] = useState<
    PollutanSourceCoverage[]
  >(extractSourcesFromCategories(calculator.getCalculatorState()));

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

  function updateCoverageTotalSource(
    pollutantId: number,
    sourceIndex: number,
    totalSources: any,
  ) {
    // const allSources = adaptedSources;
    // allSources[pollutantId].sources[sourceIndex].totalSources =
    //   parseInt(totalSources);
    // setAdaptedSources(allSources);
  }

  function updateCoverageInformedSource(
    pollutantId: number,
    sourceIndex: number,
    informedSources: any,
  ) {
    // const allSources = adaptedSources;
    // allSources[pollutantId].sources[sourceIndex].informedSources =
    //   parseInt(informedSources);
    // setAdaptedSources(allSources);
  }

  const onSubmit = (data: any) => {
    console.log(data);
    console.log('adaptedSources', adaptedSources);
  };

  return {
    updateCoverageTotalSource,
    updateCoverageInformedSource,
    handleSubmit,
    onSubmit,
    register,
    getValues,
    errors,
    control,
    t,
    adaptedSources,
  };
};

export default useCoverageForm;
