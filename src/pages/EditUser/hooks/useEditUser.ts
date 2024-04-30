import {
  CompanyUserModel,
  RoleModel,
  UserModel,
  VolunterUserModel,
} from '../../../models';
import { useEffect, useMemo, useState } from 'react';
import { set, useForm } from 'react-hook-form';
import { CompanyUserEditType, VolunteerEditType } from '../types';
import {
  getCompayUserById,
  getVolunteerById,
  putUserCompany,
  putVolunteer,
} from '../../../services';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
export const useEditUser = () => {
  const { type, id } = useParams();
  const [userData, setuserData] = useState<
    CompanyUserModel | VolunterUserModel | undefined
  >(undefined);
  const [loading, setLoading] = useState(false); // Estado para indicar si los datos se están cargando
  const navigate = useNavigate();
  const [roles, setRoles] = useState<RoleModel[]>([]);
  const { handleSubmit, register, getValues, reset } = useForm<
    UserModel | VolunteerEditType | CompanyUserEditType
  >({
    defaultValues: useMemo(() => {
      return userData;
    }, [userData]),
    resolver: undefined,
  });

  const onSubmit = async (
    data: UserModel | VolunteerEditType | CompanyUserEditType,
  ) => {
    const newUserData = { ...userData, ...data };
    setLoading(true);
    try {
      if (type == 'volunteer')
        await putVolunteer(newUserData as VolunterUserModel);
      else await putUserCompany(newUserData as CompanyUserModel);

      void Swal.fire({
        title: 'Usuario actualizado',
        icon: 'success',
        confirmButtonText: 'Aceptar',
      }).then(() => {
        setLoading(false);
        navigate(-1);
      });
    } catch (error) {
      alert(`Error al actualizar el usuario ${JSON.stringify(error.message)}`);
    }
  };
  const loadVolunteerUserDataToEdit = async (userId: number) => {
    try {
      const response = await getVolunteerById(userId);
      setuserData(response);
      setLoading(false);
    } catch (error) {
      alert(`Error al cargar los datos del usuario ${JSON.stringify(error)}`);
    }
  };

  const loadCompanyUserDataToEdit = async (userId: number) => {
    try {
      const response = await getCompayUserById(userId);
      setuserData(response);
      setLoading(false);
    } catch (error) {
      alert(`Error al cargar los datos del usuario ${JSON.stringify(error)}`);
    }
  };

  const loadUserData = async (userId: number) => {
    if (type === 'volunteer') {
      await loadVolunteerUserDataToEdit(userId);
    } else {
      await loadCompanyUserDataToEdit(userId);
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  useEffect(() => {
    reset(userData);
  }, [userData]);

  return {
    userData,
    roles,
    loading,
    loadUserData,
    handleCancel,
    onSubmit,
    handleSubmit,
    register,
  };
};
