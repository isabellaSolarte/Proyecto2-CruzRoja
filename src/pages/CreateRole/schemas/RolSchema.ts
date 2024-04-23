import { RoleModel } from "../../../models";
import { PermissionModel } from "../../../models";
import * as yup from 'yup';

export const defaultRolSchema:RoleModel = {
    id: 0,
    typeRole: '',
    permissions: [] as PermissionModel[]
}
export const rolSchemaValidation = yup.object().shape({

    typeRole: yup
        .string()
        .min(3, 'namesRol.min')
        .required('namesRol.required')
})