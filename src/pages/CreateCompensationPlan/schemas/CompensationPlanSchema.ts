import * as yup from 'yup';

const CompensationPlanSchema = yup
  .object()
  .shape({
    name: yup.string().required('El nombre es obligatorio'),
    description: yup
      .string()
      .min(50, 'La descripción es demasiado corta.')
      .max(300, 'La descripción excede el límite de caracteres(300).')
      .required('La descripción es obligatoria'),
    discount: yup
      .number()
      .min(1, 'El descuento no puede ser menor a 1')
      .required('El descuento es obligatorio'),
    actions: yup
      .array()
      .of(
        yup.object().shape({
          id: yup.number().required(),
          name: yup.string().required('El nombre no puede estar vacío'),
          description: yup
            .string()
            .required('La descripción no puede estar vacía'),
          unitaryPrice: yup
            .number()
            .required('El precio unitario es requerido'),
          footPrintUnity: yup
            .number()
            .required('La unidad de huella de carbono es requerida'),
          quantity: yup.number().required('La cantidad es requerida'),
        }),
      )
      .min(1, 'Seleccionar al menos 1 acción')
      .required('Las acciones son obligatorias para el plan de compensación'),
  })
  .required();

export default CompensationPlanSchema;
