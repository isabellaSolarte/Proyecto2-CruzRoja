import SourceCategory from '../types/SourcesCategory';
import * as yup from 'yup';


export const defaultSourcesCategory: SourceCategory[] = [
    {
        id: 1,
        name: 'Category 1',
        sources: [
            {
                id: 1,
                name: 'Source 1',
                state: false
            },
            {
                id: 2,
                name: 'Source 2',
                state: false
            },
            {
                id: 3,
                name: 'Source 3',
                state: false
            }
        ]
    },
    {
        id: 2,
        name: 'Category 2',
        sources: [
            {
                id: 4,
                name: 'Source 4',
                state: false
            },
            {
                id: 5,
                name: 'Source 5',
                state: false
            },
            {
                id: 6,
                name: 'Source 6',
                state: false
            }
        ]
    },
    {
        id: 3,
        name: 'Category 3',
        sources: [
            {
                id: 7,
                name: 'Source 7',
                state: false
            },
            {
                id: 8,
                name: 'Source 8',
                state: false
            },
            {
                id: 9,
                name: 'Source 9',
                state: false
            }
        ]
    }
];

export const sourcesCategoryValidation = yup
    .object()
    .shape({
        name: yup
            .string()
            .required('El nombre es requerido'),
        sources: yup
            .array()
            .of(
                yup.object().shape({
                    name: yup
                        .string()
                        .required('El nombre es requerido'),
                    state: yup
                        .boolean()
                        .required('El estado es requerido')
                })
            )
            .min(1, 'Se requiere al menos una fuente')
            .required('Se requiere al menos una fuente')
    })
    .required();
