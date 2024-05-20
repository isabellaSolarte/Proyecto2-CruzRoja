import * as yup from 'yup';

const PollutionTypeResolver = yup
  .object()
  .shape({
    pollutionType: yup
      .array()
      .of(
        yup.object().shape({
          pollutans: yup.array().of(
            yup.object().shape({
              state: yup.boolean().required()
            })
          ).required('pollutans.required')
        })
      )
      .test('pollutionType.min', 'pollutionType.min', (pollutionTypes) => {
        // Verificar que al menos un "pollutant" tenga "state" igual a true
        return pollutionTypes.some(type =>
          type.pollutans && type.pollutans.some(pollutant => pollutant.state === true)
        );
      })
      .required('pollutionType.required')
  })
  .required();

export default PollutionTypeResolver;
