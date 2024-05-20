import { SourceModel } from '../models';

const SourceAdapter = (externalSource: any): SourceModel => {
  return {
    id: externalSource.idSource,
    name: externalSource.sourceName,
    description: 'agregar descripción del backend',
    coverage: {
      totalSources: undefined,
      informedSources: undefined,
    },
    facturation: {
      cost: undefined,
      month: undefined,
      year: undefined,
      usage: undefined,
    },
  };
};

export default SourceAdapter;
