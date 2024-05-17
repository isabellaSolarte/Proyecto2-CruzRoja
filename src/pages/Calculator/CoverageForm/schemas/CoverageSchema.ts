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
            pollutantId: yup.number().required(),
            categoryId: yup.number().required(),
            id: yup.number().required(),
            name: yup.string().required(),
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
