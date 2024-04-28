import * as yup from 'yup';
import { RoleFormType } from '../types/RoleFormType';

export const defaultRolSchema: RoleFormType = {
  typeRole: '',
  permissions: [],
  state:true
};
export const rolSchemaValidation = yup
  .object()
  .shape({
    typeRole: yup
      .string()
      .test('len', 'Largo de texto', val =>
        val ? val.toString().length >= 3 : false,
      )
      .required('namesRol.required'),
    permissions: yup
      .array()
      .of(
        yup.object().shape({
          id: yup
            .number()
            .moreThan(0, 'roles.of.permissions.of.idPermission.moreThan')
            .required('roles.of.permissions.of.idPermission.required'),
          name: yup.string().required('roles.of.permissions.of.name.required'),
          description: yup
            .string()
            .required('roles.of.permissions.of.description.required'),
        }),
      )
      .test('len', 'Largo de texto', arr => (arr ? arr.length > 0 : false))
      .required('permissions.required'),
  })
  .required();
