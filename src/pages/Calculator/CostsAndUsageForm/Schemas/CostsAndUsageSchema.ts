import * as yup from 'yup';

const CostsResolver = yup.object({
  costs: yup.array().of(
    yup.object({
      pollutantId: yup.number().required(),
      categoryId: yup.number().required(),
      id: yup.number().required(),
      name: yup.string().required(),
      cost: yup
        .number()
        .transform((value, originalValue) => {
          return originalValue === '' ? null : value;
        })
        .nonNullable('El costo es obligatorio'),
      month: yup
        .number()
        .transform((value, originalValue) => {
          return originalValue === '' ? null : value;
        })
        .nonNullable('El mes es obligatorio'),
      year: yup
        .number()
        .transform((value, originalValue) => {
          return originalValue === '' ? null : value;
        })
        .nonNullable('El año es obligatorio'),
      usage: yup
        .number()
        .transform((value, originalValue) => {
          return originalValue === '' ? null : value;
        })
        .nonNullable('El consumo es obligatorio'),
    }).required()
  ).required(),
}).required();

export default CostsResolver;
