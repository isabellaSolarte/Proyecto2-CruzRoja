/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable no-unused-vars */
import { useFieldArray, useForm } from 'react-hook-form';
import { defaulUserSchema, userSchemaValidation } from '../schemas/UserSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserModel } from '../../../models/UserModels/UserModel';
import { RoleModel } from '../../../models/RoleModels/RoleModel';
import { useState } from 'react';
import { getAllRoles } from '../../../services/AxiosRequests/Roles/roleRequest';
import { documentTypes } from '../../../utils';
import { OptionSelector } from '../../../models';
import { useTranslation } from 'react-i18next';

const useGeneralUserDataForm = (
  updateUserData: (newUserData: UserModel) => void,
) => {
  const { t } = useTranslation('commons');
  const [roleList, setRoleList] = useState<RoleModel[]>([]);
  const documents: OptionSelector[] = documentTypes(t);
  const [confirmedPassword, setConfirmedPassword] = useState<string>('');
  const [confirmedPasswordError, setConfirmedPasswordError] =
    useState<boolean>(false);

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

  const { fields, append, update, remove } = useFieldArray({
    control,
    name: 'roles',
  });

  const addRole = (newRole: RoleModel) => {
    console.log('newRole', newRole);
    append(newRole);
    register(`roles.${fields.length}.id`);
    console.log('error', errors);
  };

  const onSubmit = async (data: UserModel) => {
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

  const loadRoles = async () => {
    const roles = await getAllRoles();
    setRoleList(roles);
  };

  const onChangeComfirmedPassword = (value: string) => {
    setConfirmedPassword(value);
  };

  /**
   *
   *
   * @returns boolean, if the password is the same as the confirmed password return true else return false
   */
  const validatePassword = (): boolean => {
    setConfirmedPasswordError(getValues().password !== confirmedPassword);
    return !confirmedPasswordError;
  };

  return {
    handleSubmit,
    register,
    onSubmit,
    addRole,
    update,
    validateData,
    loadRoles,
    remove,
    onChangeComfirmedPassword,
    validatePassword,
    fields,
    errors,
    defaulUserSchema,
    roleList,
    documents,
    control,
    t,
    confirmedPasswordError,
  };
};

export default useGeneralUserDataForm;
