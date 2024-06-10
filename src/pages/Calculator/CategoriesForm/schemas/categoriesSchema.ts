import * as yup from 'yup';

const CategoriesSchema = yup.object().shape({
  selectedCategories: yup
    .array()
    .min(1, 'Debe seleccionar al menos una categoría')
    .required('Debe seleccionar al menos una categoría'),
});

export default CategoriesSchema;