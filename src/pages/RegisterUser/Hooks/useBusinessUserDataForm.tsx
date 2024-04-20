import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { defaulBusinessUserSchema, businessUserSchemaValidation } from '../schemas';

const useBusinessUserDataForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: defaulBusinessUserSchema,
    resolver: yupResolver(businessUserSchemaValidation),
  });

  const onSubmit = async (data: unknown) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(data);
  };

  return {
    handleSubmit,
    register,
    onSubmit,
    errors,
  };
};

export default useBusinessUserDataForm;
