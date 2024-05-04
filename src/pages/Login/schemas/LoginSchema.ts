import * as yup from 'yup';
import { Credentials } from '../../../models';

export const defaultCredentials: Credentials = {
    username: '',
    password: '',
};

export const loginSchema = yup.object().shape({
  username: yup.string().required('El nombre de usuario es obligatorio'),
  password: yup.string().required('La contraseña es obligatoria'),
});
