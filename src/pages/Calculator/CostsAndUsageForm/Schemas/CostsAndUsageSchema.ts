import * as yup from 'yup';

export const costsAndUsageSchema = yup
  .object()
  .shape({
    cost: yup.number()
      .typeError('Debes ingresar un número válido')
      .positive('Debes ingresar un número positivo')
      .required('Debes ingresar un costo')
      .min(0, 'El costo debe ser mayor o igual a 0'), // Ajusta el mensaje según tus necesidades
  })
  .required();