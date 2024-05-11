import * as yup from 'yup';

const CoverageResolver = yup.object().shape({
  totalSources: yup.number().required('El total es requerido'),
  informedSources: yup.number().required('El total es requerido'),
});

export default CoverageResolver;
