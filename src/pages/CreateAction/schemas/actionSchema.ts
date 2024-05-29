import * as yup from 'yup';

export const actionSchema = yup
  .object()
  .shape({
    name: yup.string()
      .required('El nombre no puede estar vacío')
      .min(2, 'El nombre debe tener más de 2 caracteres')
      .max(50, 'El nombre no puede tener más de 50 caracteres'),
    description: yup.string()
      .required('La descripción no puede estar vacía')
      .min(2, 'La descripción debe tener más de 2 caracteres')
      .max(255, 'La descripción no puede tener más de 255 caracteres'),
    unitaryPrice: yup.number()
      .required('El precio unitario es requerido')
      .positive('El precio unitario debe ser un número positivo')
      .typeError('El precio unitario debe ser un número'),
    footPrintUnity: yup.number()
      .required('La unidad de huella de carbono es requerida')
      .positive('La unidad de huella de carbono debe ser un número positivo')
      .typeError('La unidad de huella de carbono debe ser un número'),
    quantity: yup.number()
      .required('La cantidad es requerida')
      .positive('La cantidad debe ser un número positivo')
      .integer('La cantidad debe ser un número entero')
      .typeError('La cantidad debe ser un número')
  }).required();
