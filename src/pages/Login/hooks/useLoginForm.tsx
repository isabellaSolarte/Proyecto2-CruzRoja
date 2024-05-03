import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema, defaultCredentials } from '../schemas';
import { useUserActions } from '../../../recoil';
import { Credentials } from '../../../models';

const useLoginForm = () => {
  const userActions = useUserActions();

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

  const handleLogin = async () => {
    await userActions.login({
      username: 'ADMIN',
      password: 'AdminHuellaCarbonoJDCE1002',
    });
  };

  const onSubmit = async (data: Credentials) => {
    setIsLoading(true);
    setError(null);

    console.log('useLogin data:', data);
    await userActions.login(data);
    //await handleLogin();
    // Aquí puedes realizar la lógica de inicio de sesión, como enviar una solicitud al servidor.

    setIsLoading(false);
  };

  return { handleSubmit, register, errors, isLoading, error, onSubmit };
};

export default useLoginForm;
