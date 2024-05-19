import * as yup from 'yup';

const PollutionTypeResolver = yup
  .object()
  .shape({
    pollutionType: yup
        .array()
        .min(1, 'pollutionType.min')
        .required('pollutionType.required')
        
}).required();

export default PollutionTypeResolver;