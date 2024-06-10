import * as yup from 'yup';
import { CompanyUserModel } from '../../../models/UserModels/CompanyUserModel';

export const defaulBusinessUserSchema: Pick<
  CompanyUserModel,
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
      .test('len', 'El NIT debe tener 9 dígitos', val =>
        val ? val.toString().length == 9 : false,
      )
      .moreThan(0, 'companyNit.number')
      .required('companyNit.required'),

    companyName: yup.string().required('companyName.required'),

    companyPhone: yup
      .string()
      .matches(/^3/, 'El teléfono debe empezar por el número 3')
      .matches(/^\d+$/, 'companyPhone.number')
      .test('len', 'El número de teléfono debe tener 10 dígitos', val =>
        val ? val.toString().length === 10 : false,
      )
      .required('companyPhone.required'),

    companyEmail: yup
      .string()
      .email('companyEmail.email')
      .required('companyEmail.required'),

    address: yup.object().shape({
      city: yup.string().required('address.city.required'),
      country: yup.string().required('address.country.required'),
      neighborhood: yup.string().required('address.neighborhood.required'),
      street: yup.string().required('address.street.required'),
      floorOrApartment: yup
        .string()
        .required('address.floorOrApartment.required'),
      number: yup.string().required('address.number.required'),
    }),
  })
  .required();
