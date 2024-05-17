/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslation } from 'react-i18next';
import { CategoryModel } from '../../../../models';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CoverageResolver from '../schemas/CoverageSchema';
import { CalculatorContext } from '../../../../contexts';

type PollutanCoverage = {
  id: number;
  name: string;
  totalSources: number;
  informedSources: number;
  //errors: string[];
};

const useCoverageForm = () => {
  const { t } = useTranslation('commons');
  const calculator = useContext(CalculatorContext);
  const [adaptedSources, setAdaptedSources] = useState<PollutanCoverage[]>(
    extractSourcesFromCategories(calculator.getCalculatorState()),
  );

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
  ): PollutanCoverage[] {
    const pollutans = categories.flatMap(category => category.pollutans);
    const sources = pollutans.flatMap(pollutant => pollutant.sources);
    return sources.map(source => {
      return {
        totalSources: source.coverage.totalSources,
        informedSources: source.coverage.informedSources,
        id: source.id,
        name: source.name,
      };
    });
  }

  function updateCoverageTotalSource(sourceIndex: number, totalSources: any) {
    const allSources = adaptedSources;
    allSources[sourceIndex].totalSources = parseInt(totalSources);
    setAdaptedSources(allSources);
  }

  function updateCoverageInformedSource(
    sourceIndex: number,
    informedSources: any,
  ) {
    const allSources = adaptedSources;
    allSources[sourceIndex].informedSources = parseInt(informedSources);
    setAdaptedSources(allSources);
  }

  const onSubmit = (data: any) => {
    console.log(data);
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
