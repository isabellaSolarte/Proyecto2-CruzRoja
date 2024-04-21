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
    append(newRole);
    register(`roles.${fields.length}.idRole`);
    console.log('error', errors);
  };

  const onSubmit = async (data: UserModel) => {
    console.log('error', errors);
    await new Promise(resolve => setTimeout(resolve, 0));
    updateUserData({ ...data, roles: fields });
  };

  const validateData = (): Promise<boolean> => {
    const valid = userSchemaValidation
      .validate(getValues())
      .then(() => {
        updateUserData(getValues());
        return true;
      })
      .catch(() => false);
    return valid;
  };

  return {
    handleSubmit,
    register,
    onSubmit,
    addRole,
    update,
    validateData,
    fields,
    errors,
    defaulUserSchema,
  };
};

export default useGeneralUserDataForm;
