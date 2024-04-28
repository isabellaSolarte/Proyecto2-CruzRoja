import {
  CompanyUserModel,
  RoleModel,
  UserModel,
  VolunterUserModel,
} from '../../../models';
import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { CompanyUserEditType, VolunteerEditType } from '../types';
import { getCompayUserById, getVolunteerById, putUserCompany, putVolunteer } from '../../../services';
import { PathNames } from '../../../core';
import { useNavigate, useParams } from 'react-router-dom';
export const useEditUser = () => {
  const { type, id } = useParams();
  const [userData, setuserData] = useState<
  CompanyUserModel | VolunterUserModel | undefined
  >(undefined);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false); // Estado para indicar si los datos se están cargando
  const navigate = useNavigate();
  const [roles, setRoles] = useState<RoleModel[]>([]);
  const { 
    handleSubmit,
    register,
    getValues,
    setValue
   } = useForm<
      UserModel | VolunteerEditType | CompanyUserEditType
    >({
      defaultValues: useMemo(() => {
        return userData;
      }, [userData]),
      resolver: undefined,
    });
    
  const onSubmit = async (data :any) => {
    const updateUser = {
      ...getValues(),
    }
    try{
      if(type=='volunteer'){
         await putVolunteer(data)
      }else{
        await putUserCompany(data)
      }
    }
    catch(error: any){

    }
  }
  const loadVolunteerUserDataToEdit = async (userId:number) => {
    try {
      let response;
      response = await getVolunteerById(userId);
      setuserData(response);
      setLoading(false);
    } catch (error) {
      setError(error as Error);
    }
  };

  const loadCompanyUserDataToEdit = async (userId:number) => {
    try {
      let response;
      response = await getCompayUserById(userId);
      setuserData(response);
      setLoading(false);
    } catch (error) {
      setError(error as Error);
    }
  };

 
  const handleCancel = ( ) =>
    {
      const userIdString = userData?.id ? userData.id.toString() : '';

      navigate(
        PathNames.VIEW_USER.replace(':id', userIdString).replace(
          ':type',
          type ? type : 'volunteer',
        ),
        {
          replace: true,
        },
      );
    };
    const handleSave = ( ) =>
      {
        const userIdString = userData?.id ? userData.id.toString() : '';
        navigate(
          PathNames.VIEW_USER.replace(':id', userIdString).replace(
            ':type',
            type ? type : 'volunteer',
          ),
          {
            replace: true,
          },
        );
      };
      
  return {
    userData,
    roles,
    loadCompanyUserDataToEdit,
    loadVolunteerUserDataToEdit,
    handleSave,
    handleCancel,
    onSubmit,
    handleSubmit,
    register
  };
};
