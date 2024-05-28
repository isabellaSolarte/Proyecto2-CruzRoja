import * as yup from 'yup';
import { ActionType } from '../types/ActionType';

export const defaulActionSchema: ActionType = {
    id: 0,
    name: '',
    ufp: 0,
    cantidad: 0,
};

export const defaulActionsSchema: Array<ActionType> = [
    {
        id: 0,
        name: 'Accion 1',
        ufp: 1,
        cantidad: 1,
    },
    {
        id: 1,
        name: 'Accion 2',
        ufp: 1,
        cantidad: 1,
    },
];

const actionSchema = yup.object().shape({
    id: yup.number().required('El id es requerido'),
  name: yup.string().required('El nombre es requerido'),
  ufp: yup.number().required('El UFP es requerido').min(0, 'El UFP debe ser mayor o igual a 0'),
  cantidad: yup.number().required('La cantidad es requerida').min(1, 'La cantidad debe ser mayor o igual a 1'),
});

const actionsValidationSchema = yup.object().shape({
    actions: yup
            .array()
            .of(actionSchema)
            .min(1, 'Debe seleccionar al menos una acción'),
});


export default actionsValidationSchema;