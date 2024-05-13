import * as yup from 'yup';

export const costsAndUsageSchema = yup
  .object()
  .shape({
    cost: yup.number()
      .typeError('Debes ingresar un número válido')
      .positive('Debes ingresar un número positivo')
      .required('Debes ingresar un costo')
      .min(1, 'Debes ingresar un número mayor a 0'),
    usage: yup.number()
      .typeError('Debes ingresar un número válido')
      .positive('Debes ingresar un número positivo')
      .required('Debes ingresar un uso')
      .min(1, 'Debes ingresar un número mayor a 0'),
    date: yup.date().required('Debes ingresar una fecha'),
  })
  .required();
