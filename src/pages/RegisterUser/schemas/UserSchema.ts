import { UserModel } from '../../../models';
import * as yup from 'yup';

export const defaulUserSchema: UserModel = {
  documentNumber: 0,
  documentType: '',
  names: '',
  lastNames: '',
  personalPhone: '',
  personalEmail: '',
  username: '',
  password: '',
  roles: [],
  state: false,
};

export const userSchemaValidation = yup
  .object()
  .shape({
    documentNumber: yup
      .number()
      .moreThan(0, 'El número de documento debe ser mayor a 0')
      .test(
        'len',
        'El número de documento debe tener al menos 10 caracteres.',
        val => (val ? val.toString().length >= 10 : false),
      )
      .required(),
    documentType: yup
      .string()
      .min(6, 'El tipo de documento debe tener al menos 6 caracteres.')
      .required(),
    names: yup
      .string()
      .min(3, 'Por favor escriba su nombre completo')
      .required(),
    lastNames: yup.string().required(),
    personalPhone: yup.string().required(),
    personalEmail: yup.string().email().required(),
    username: yup.string().required(),
    password: yup.string().required(),
    roles: yup
      .array()
      .default([])
      .min(1, 'Por favor seleccione al menos un rol')
      .of(
        yup.object().shape({
          idRole: yup
            .number()
            .moreThan(
              0,
              'El identificador del permiso debe ser positivo mayor a 0',
            )
            .required(),
          typeRole: yup.string().required(),
          permissions: yup
            .array()
            .default([])
            .of(
              yup.object().shape({
                idPermission: yup
                  .number()
                  .moreThan(
                    0,
                    'El identificador del permiso debe ser positivo mayor a 0',
                  )
                  .required(),
                name: yup.string().required(),
                description: yup.string().required(),
              }),
            )
            .required(),
        }),
      )
      .required(),
    state: yup.boolean().default(true).optional(),
  })
  .required();
