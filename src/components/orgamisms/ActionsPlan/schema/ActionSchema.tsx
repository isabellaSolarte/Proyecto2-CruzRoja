import * as yup from 'yup';
import { ActionType } from '../types/ActionType';

export const defaultActionSchema: ActionType = {
    id: 0,
    name: '',
    description: '',
    unitaryPrice: 0,
    footPrintUnity: 0,
    quantity: 0,
};

export const defaultActionsSchema: Array<ActionType> = [
    {
        id: 0,
        name: 'Accion 1',
        description: 'Descripción de la Acción 1',
        unitaryPrice: 20,
        footPrintUnity: 1,
        quantity: 1,
    },
    {
        id: 1,
        name: 'Accion 2',
        description: 'Descripción de la Acción 2',
        unitaryPrice: 10,
        footPrintUnity: 1,
        quantity: 1,
    },
];

const actionSchema = yup.object().shape({
    id: yup.number().required('El id es requerido'),
    name: yup.string().required('El nombre es requerido'),
    description: yup.string().required('La descripción es requerida'),
    unitaryPrice: yup.number().required('El precio unitario es requerido').min(1, 'El precio unitario debe ser mayor a 0'),
    footPrintUnity: yup.number().required('El UFP es requerido').min(1, 'El UFP debe ser mayor a 0'),
    quantity: yup.number().required('La cantidad es requerida').min(1, 'La cantidad debe ser mayor o igual a 1'),
});

const actionsValidationSchema = yup.object().shape({
    actions: yup
        .array()
        .of(actionSchema)
        .min(1, 'Debe seleccionar al menos una acción'),
});

export default actionsValidationSchema;