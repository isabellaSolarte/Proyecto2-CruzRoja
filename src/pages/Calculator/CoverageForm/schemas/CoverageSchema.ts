import * as yup from 'yup';

const CoverageResolver = yup
  .object()
  .shape({
    coverage: yup
      .array()
      .of(
        yup
          .object()
          .shape({
            totalSources: yup
              .number()
              .transform((value, originalValue) => {
                return originalValue === '' ? null : value;
              })
              .required('coverageForm.totalSource'),
            informedSources: yup
              .number()
              .transform((value, originalValue) => {
                return originalValue === '' ? null : value;
              })
              .required('coverageForm.informedSource'),
          })
          .required(),
      )
      .required(),
  })
  .required();

export default CoverageResolver;
