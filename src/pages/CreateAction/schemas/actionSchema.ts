import * as yup from 'yup';

export const actionSchema = yup
  .object()
  .shape({
    name: yup
      .string()
      .min(2, 'El nombre debe tener más de 2 caracteres')
      .max(50, 'El nombre no puede tener más de 50 caracteres')
      .required('El nombre no puede estar vacío'),
    description: yup
      .string()
      .min(2, 'La descripción debe tener más de 2 caracteres')
      .max(255, 'La descripción no puede tener más de 255 caracteres')
      .required('La descripción no puede estar vacía'),
    unitaryPrice: yup
      .number()
      .positive('El precio unitario debe ser un número positivo')
      .typeError('El precio unitario debe ser un número')
      .required('El precio unitario es requerido'),
    footPrintUnity: yup
      .number()
      .positive('La unidad de huella de carbono debe ser un número positivo')
      .typeError('La unidad de huella de carbono debe ser un número')
      .required('La unidad de huella de carbono es requerida'),
    quantity: yup
      .number()
      .positive('La cantidad debe ser un número positivo')
      .integer('La cantidad debe ser un número entero')
      .typeError('La cantidad debe ser un número')
      .required('La cantidad es requerida'),
  })
  .required();
