/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslation } from 'react-i18next';
import { SourceModel } from '../../../../models';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CoverageResolver from '../schemas/CoverageSchema';

type ErrorPollutanCoverage = {
  id: number;
  name: string;
  totalSources: number;
  informedSources: number;
  //errors: string[];
};

const useCoverageForm = (sourcesCoverage: SourceModel[]) => {
  const { t } = useTranslation('commons');
  const [adaptedSources, setAdaptedSources] = useState<ErrorPollutanCoverage[]>(
    adaptToErrorSchema(),
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

  function adaptToErrorSchema() {
    return sourcesCoverage.map(source => {
      const pollutanCoverage: ErrorPollutanCoverage = {
        totalSources: source.coverage.totalSources,
        informedSources: source.coverage.informedSources,
        id: source.id,
        name: source.name,
      };
      return pollutanCoverage;
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
    adaptToErrorSchema,
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
