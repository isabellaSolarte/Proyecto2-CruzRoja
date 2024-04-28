import { useParams } from 'react-router-dom';
import {
  CompanyUserModel,
  UserModel,
  VolunterUserModel,
} from '../../../models';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { CompanyUserEditType, VolunteerEditType } from '../types';

export const useEditUser = () => {
  const { type, id } = useParams();
  const [userData, setuserData] = useState<
    CompanyUserModel | VolunterUserModel | undefined
  >(undefined);

  const { handleSubmit } = useForm<
    UserModel | VolunteerEditType | CompanyUserEditType
  >({
    defaultValues: useMemo(() => {
      return userData;
    }, [userData]),
    resolver: undefined,
  });

  const loadVolunteerUserDataToEdit = async () => {
    try {
    } catch (error) {}
  };

  const loadCompanyUserDataToEdit = async () => {
    try {
    } catch (error) {}
  };

  const putUserData = async () => {
    if (type === 'volunteer') {
    } else if (type === 'company') {
    }
  };

  return {
    putUserData,
  };
};
