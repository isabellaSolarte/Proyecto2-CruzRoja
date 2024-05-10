import SourcesType from '../types/SourcesType';
import * as yup from 'yup';

export const defaulSourceSchema: SourcesType = {
    id: 0,
    categoryName: '',
    name: '',
    description: '',
    state: false,
};
export const defaulSourcesSchema: SourcesType[] = [
    {
        ...defaulSourceSchema
    },
];

export const sourceSchema = yup.object().shape({
    id: yup.number().required('El campo "id" es requerido.'),
    categoryName: yup.string().required('El campo "categoryName" es requerido.'),
    name: yup.string().required('El campo "name" es requerido.'),
    description: yup.string().required('El campo "description" es requerido.'),
    state: yup.boolean().required('El campo "state" es requerido.'),
});

export const sourcesSchema = yup.array().of(
    sourceSchema
).min(1, 'Debe tener al menos una fuente.').required();
