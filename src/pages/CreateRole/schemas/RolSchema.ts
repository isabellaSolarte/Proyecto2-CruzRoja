import * as yup from 'yup';
import { RoleFormType } from "../types/RoleFormType";

export const defaultRolSchema:RoleFormType = {
    typeRole: '',
    permissions: []
}
export const rolSchemaValidation = yup.object().shape({

    typeRole: yup
        .string()
        .min(3, 'namesRol.min')
        .required('namesRol.required'),
        permissions: yup
        .array()
        .of(
          yup.object().shape({
            id: yup
                .number()
                .moreThan(0, 'roles.of.permissions.of.idPermission.moreThan')
                .required('roles.of.permissions.of.idPermission.required'),
            name: yup
              .string()
              .required('roles.of.permissions.of.name.required'),
            description: yup
              .string()
              .required('roles.of.permissions.of.description.required'),
          }),
        )
        .min(1, 'permissions.min')
        .required('permissions.required')
        
}).required();