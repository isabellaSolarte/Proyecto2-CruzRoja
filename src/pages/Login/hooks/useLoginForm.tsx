import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema, defaultCredentials } from '../schemas';
import { useUserActions } from '../../../recoil';
import { Credentials } from '../../../models';

const useLoginForm = () => {
  const userActions = useUserActions();
  const [rememberMe, setRememberMe] = useState(false); // Estado del checkbox

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: defaultCredentials,
    resolver: yupResolver(loginSchema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: Credentials) => {
    setIsLoading(true);
    setError(null);
    // username: 'ADMIN', password: 'AdminHuellaCarbonoJDCE1002'

    await userActions.login(data, rememberMe);
    //await handleLogin();
    // Aquí puedes realizar la lógica de inicio de sesión, como enviar una solicitud al servidor.

    setIsLoading(false);
  };

  return { handleSubmit, register, errors, isLoading, error, onSubmit, rememberMe, setRememberMe };
};

export default useLoginForm;
