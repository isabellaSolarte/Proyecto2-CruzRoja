import * as yup from 'yup';
import { CompanyUserMode } from '../../../models/UserModels/CompanyUserModel';

export const defaulBusinessUserSchema: Pick<
  CompanyUserMode,
  'companyNit' | 'companyName' | 'companyPhone' | 'companyEmail' | 'address'
> = {
  companyNit: 0,
  companyName: '',
  companyPhone: '',
  companyEmail: '',
  address: {
    city: '',
    country: '',
    neighborhood: '',
    street: '',
    floorOrApartment: '',
    number: '',
  },
};

export const businessUserSchemaValidation = yup
  .object()
  .shape({
    companyNit: yup
      .number()
      .test('len', 'El nit no puede tener más de 9 dígitos', val =>
        val ? val.toString().length <= 9 : false,
      )
      .required(),
    companyName: yup.string().required(),
    companyPhone: yup.string().required(),
    companyEmail: yup.string().email().required(),
    address: yup.object().shape({
      city: yup.string().required(),
      country: yup.string().required(),
      neighborhood: yup.string().required(),
      street: yup.string().required(),
      floorOrApartment: yup.string().required(),
      number: yup.string().required(),
    }),
  })
  .required();
