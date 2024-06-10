import * as yup from 'yup';

export const categorySchema = yup
  .object()
  .shape({
    name: yup.string()
    .required('El nombre no puede estar vacio')
    .min(2, 'El nombre debe tener mas de 2 caracteres')
    .max(50, 'El nombre no puede tener mas de 50 caracteres'),
    descripction: yup.string()
    .required('La descripción no puede estar vacia')
    .min(2, 'La descripción debe tener mas de 2 caracteres')
    .max(255, 'La descripción no puede tener mas de 255 caracteres'),
    scope: yup.string()
    .required('no puede estar vacio')
        
}).required();