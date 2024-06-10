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
              .nonNullable('coverageForm.totalSource')
              .moreThan(0, 'Total sources must be greater than 0'),
            informedSources: yup
              .number()
              .transform((value, originalValue) => {
                return originalValue === '' ? null : value;
              })
              .nonNullable('coverageForm.informedSource')
              .moreThan(0, 'Informed sources must be greater than 0')
              .test(
                'informedSources-less-than-totalSources',
                'Informed sources must be less than or equal to total sources',
                function (value) {
                  const { totalSources } = this.parent;
                  return value <= totalSources;
                },
              ),
          })
          .required(),
      )
      .required(),
  })
  .required();

export default CoverageResolver;
