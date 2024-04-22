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
    documentNumber: yup.number().required(),
    documentType: yup.string().required(),
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
      .of(
        yup.object().shape({
          idRole: yup.number().required(),
          typeRole: yup.string().required(),
          permissions: yup
            .array()
            .default([])
            .of(
              yup.object().shape({
                idPermission: yup.number().required(),
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
