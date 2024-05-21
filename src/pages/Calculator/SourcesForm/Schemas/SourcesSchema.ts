import SourcesType from '../types/SourcesType';
import * as yup from 'yup';

export const defaulSourceSchema: SourcesType = {
    id: 0,
    categoryName: '',
    name: '',
    description: '',
    state: false,
    coverage: {
        totalSources: undefined,
        informedSources: undefined,
    },
    facturation: {
        cost: undefined,
        month: undefined,
        year: undefined,
        usage: undefined
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
            totalSources: undefined,
            informedSources: undefined,
        },
        facturation: {
            cost: undefined,
            month: undefined,
            year: undefined,
            usage: undefined
        },
    },
    {
        id: 1,
        categoryName: '',
        name: '',
        description: '',
        state: false,
        coverage: {
            totalSources: undefined,
            informedSources: undefined,
        },
        facturation: {
            cost: undefined,
            month: undefined,
            year: undefined,
            usage: undefined
        },
    },
]

export const sourceSchema = yup.object().shape({
    id: yup.number().nullable().required('El campo "id" es requerido.'),
    categoryName: yup.string().required('El campo "categoryName" es requerido.'),
    name: yup.string().required('El campo "name" es requerido.'),
    description: yup.string().required('El campo "description" es requerido.'),
    state: yup.boolean().required('El campo "state" es requerido.').default(false),
    coverage: yup.object().shape({
        totalSources: yup.number().nullable().default(undefined),
        informedSources: yup.number().nullable().default(undefined),
    }).required(),
    facturation: yup.object().shape({
        cost: yup.number().nullable().default(undefined),
        month: yup.number().nullable().default(undefined),
        year: yup.number().nullable().default(undefined),
        usage: yup.number().nullable().default(undefined),
    }).required(),
});

export const sourcesSchema = yup.array().of(
    sourceSchema
).min(1, 'Debe tener al menos una fuente.').required();


export const initialSchema = {
    sources: defaulSourcesSchema, // Arreglo de objetos sourceSchema
  };
  
export const initialSchemaValidation = yup.object().shape({
    sources: yup
        .array()
        .of(sourceSchema)
        .min(1, 'Debe tener al menos una fuente.')
        .required()
        .test('at-least-one-state-true', 'Al menos un source debe tener state true.', (value) => {
            if (Array.isArray(value)) {
                return value.some((source) => source.state === true);
            }
            return false;
        }),
});
