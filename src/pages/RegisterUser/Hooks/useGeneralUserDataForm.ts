/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable no-unused-vars */
import { useFieldArray, useForm } from 'react-hook-form';
import { defaulUserSchema, userSchemaValidation } from '../schemas/UserSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserModel } from '../../../models/UserModels/UserModel';
import { RoleModel } from '../../../models/RoleModels/RoleModel';

const useGeneralUserDataForm = (
  updateUserData: (newUserData: UserModel) => void,
) => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    getValues,
  } = useForm<UserModel>({
    defaultValues: defaulUserSchema,
    resolver: yupResolver(userSchemaValidation),
  });

  const { fields, append, update } = useFieldArray({
    control,
    name: 'roles',
  });

  const addRole = (newRole: RoleModel) => {
    console.log('newRole', newRole);
    console.log('fields', fields);
    console.log('errors', errors);
    console.log('getValues', getValues());
    append(newRole);
    register(`roles.${fields.length}.idRole`);
  };

  const onSubmit = async (data: UserModel) => {
    await new Promise(resolve => setTimeout(resolve, 0));
    updateUserData(data);
  };

  return {
    handleSubmit,
    register,
    onSubmit,
    addRole,
    update,
    fields,
    errors,
  };
};

export default useGeneralUserDataForm;
