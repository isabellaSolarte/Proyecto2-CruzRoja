import SourcesType from '../types/SourcesType';
import * as yup from 'yup';

export const defaulSourceSchema: SourcesType = {
    id: 0,
    categoryName: '',
    name: '',
    description: '',
    state: false,
    coverage: {
        totalSources: 0,
        informedSources: 0,
    },
};
export const defaulSourcesSchema: Array<SourcesType> = [
    {
        id: 0,
        categoryName: '',
        name: '',
        description: '',
        state: false,
        coverage: {
            totalSources: 0,
            informedSources: 0,
        },
    },
    {
        id: 1,
        categoryName: '',
        name: '',
        description: '',
        state: false,
        coverage: {
            totalSources: 0,
            informedSources: 0,
        },
    },
]

export const sourceSchema = yup.object().shape({
    id: yup.number().required('El campo "id" es requerido.'),
    categoryName: yup.string().required('El campo "categoryName" es requerido.'),
    name: yup.string().required('El campo "name" es requerido.'),
    description: yup.string().required('El campo "description" es requerido.'),
    state: yup.boolean().required('El campo "state" es requerido.').default(false),
    coverage: yup.object().shape({
        totalSources: yup.number().required('El campo "totalSources" es requerido.').default(0),
        informedSources: yup.number().required('El campo "informedSources" es requerido.').default(0),
    }).required(),
});

export const sourcesSchema = yup.array().of(
    sourceSchema
).min(1, 'Debe tener al menos una fuente.').required();


export const initialSchema = {
    sources: defaulSourcesSchema, // Arreglo de objetos sourceSchema
  };
  
export  const initialSchemaValidation = yup.object().shape({
    sources: yup.array().of(sourceSchema).default(initialSchema.sources).min(1, 'Debe tener al menos una fuente.').required(),
  });