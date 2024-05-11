/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslation } from 'react-i18next';
import { SourceModel } from '../../../models';
import { useState } from 'react';

type ErrorPollutanCoverage = {
  name: string;
  sourceId: number;
  totalSources: number;
  informedSources: number;
  errors: string[];
};

const useCoverageForm = (sourcesCoverage: SourceModel[]) => {
  const { t } = useTranslation('commons');
  const [adaptedSources, setAdaptedSources] = useState<ErrorPollutanCoverage[]>(
    adaptToErrorSchema(),
  );

  function adaptToErrorSchema() {
    return sourcesCoverage.map(source => {
      return {
        name: source.name,
        sourceId: source.id,
        totalSources: source.coverage.totalSources,
        informedSources: source.coverage.informedSources,
        errors: ['falta', 'falta'],
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

  return {
    adaptToErrorSchema,
    updateCoverageTotalSource,
    updateCoverageInformedSource,
    t,
    adaptedSources,
  };
};

export default useCoverageForm;
