import * as yup from 'yup';

const CostsResolver = yup.object().shape({
  costs: yup.array().of(
    yup.object().shape({
      pollutantId: yup.number().required(),
      categoryId: yup.number().required(),
      id: yup.number().required(),
      name: yup.string().required(),
      cost: yup.number().required('El costo es obligatorio'),
      month: yup.number().required('El mes es obligatorio'),
    }).required()
  ).required(),
}).required();

export default CostsResolver;
