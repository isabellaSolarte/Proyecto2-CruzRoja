import { UserModel } from '../../../models';
import * as yup from 'yup';

export const defaulUserSchema: UserModel = {
  id: 0,
  documentType: '',
  names: '',
  lastNames: '',
  personalPhone: '',
  personalEmail: '',
  username: '',
  password: '',
  roles: [],
  state: false,
  allowedRoutes: [],
};

export const userSchemaValidation = yup.object().shape({
  id: yup
    .number()
    .moreThan(0, 'documentNumber.moreThan')
    .test('len', 'documentNumber.len', val =>
      val ? val.toString().length >= 10 : false,
    )
    .required('documentNumber.required'),
  documentType: yup
    .string()
    .min(6, 'documentType.min')
    .required('documentType.required'),
  names: yup.string().min(3, 'names.min').required('names.required'),
  lastNames: yup.string().required('lastNames.required'),
  personalPhone: yup
    .string()
    .matches(/^3/, 'El teléfono debe empezar por el número 3')
    .matches(/^\d+$/, 'companyPhone.number')
    .test('len', 'El número de teléfono debe tener 10 dígitos', val =>
      val ? val.toString().length === 10 : false,
    )
    .required('personalPhone.required'),
  personalEmail: yup
    .string()
    .email('personalEmail.email')
    .required('personalEmail.required'),
  username: yup.string().required('username.required'),
  password: yup
    .string()
    .min(10, 'password.min')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
      'password.pattern',
    )
    .required('password.required'),
  roles: yup
    .array()
    .of(
      yup.object().shape({
        id: yup
          .number()
          .moreThan(0, 'roles.of.idRole.moreThan')
          .required('roles.of.idRole.required'),
        typeRole: yup.string().required('roles.of.typeRole.required'),
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
          .required('roles.of.permissions.required'),
      }),
    )
    .min(1, 'roles.min')
    .required('roles.required'),
  state: yup.boolean().default(true),
  allowedRoutes: yup.array().notRequired(),
});
