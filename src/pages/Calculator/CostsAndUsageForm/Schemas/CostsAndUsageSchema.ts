
import * as yup from 'yup';

export const costsAndUsageSchema = yup
  .object()
  .shape({
    cost: yup.number()
      .typeError('Debes ingresar un número válido')
      .positive('Debes ingresar un número positivo')
      .max(100000000,'Sobrepasaste el número maximo de digitos')
      .required('Debes ingresar un costo'),
    month: yup.number().required('Debes ingresar una fecha')
  })
  .required();