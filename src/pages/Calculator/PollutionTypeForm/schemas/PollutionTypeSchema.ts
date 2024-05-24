import * as yup from 'yup';

const PollutionTypeResolver = yup
  .object()
  .shape({
    pollutionType: yup
      .array()
      .test('pollutionType.min', 'pollutionType.min', (pollutionTypes) => {
        // Verificar que al menos un "pollutant" tenga "state" igual a true
        return pollutionTypes?.every(type =>
          type.pollutans.some(pollutant => pollutant.state)
        );
      })
      .required('pollutionType.required')
  })
  .required();

export default PollutionTypeResolver;
