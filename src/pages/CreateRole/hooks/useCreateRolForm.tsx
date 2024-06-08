import { useState, useEffect, useMemo } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { PermissionModel } from '../../../models';
import { yupResolver } from '@hookform/resolvers/yup';
import { rolSchemaValidation } from '../schemas/RolSchema';
import { getRolId, putRol } from '../../../services/AxiosRequests/Roles/roleRequest';
import { getAllPermissions } from '../../../services/Permissions/permissionsRequest';
import { useNavigate, useParams } from 'react-router-dom';
import { PathNames } from '../../../core';
import { postRol } from './../../../services/AxiosRequests/Roles/roleRequest';
import { RoleFormType } from '../types/RoleFormType';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';

// TODO agregarPermiso y  hacer la peticion de crear rol con la lista de permisos
export const useCreateRolForm = () => {
  const { t } = useTranslation('commons');
  const { id } = useParams(); // State for id
  const [permissionList, setPermissionList] = useState<PermissionModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [rolData, setrolData] = useState<RoleFormType | undefined>();

  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    getValues,
    reset,
  } = useForm({
    defaultValues: useMemo(() => {
      return rolData;
    }, [rolData]),

    resolver: yupResolver(rolSchemaValidation),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'permissions',
  });

  const addRole = (newRole: PermissionModel) => {
    append(newRole);
    register(`permissions.${fields.length}.id`);
  };

  const removeRole = (roleName: string) => {
    const indexToRemove = fields.findIndex(field => field.name === roleName);

    if (indexToRemove !== -1) {
      remove(indexToRemove);
    }
  };

  const onSubmit = async () => {
    const updateRol = {
      ...getValues(),
      state: true, //le asigno el estado del rol en true
    };

    try {
      if (PathNames.CREATE_ROLE.toString() === location.pathname) {
        await postRol(updateRol);
        void Swal.fire({
          title: t('alertText.correctOperation'),
          text: t('alertText.rolCreate'),
          icon: 'success',
          confirmButtonText: t('generalButtonText.accept'),
        }).then(() => {
          navigate(PathNames.ROLES, { replace: true });
        });
      } else {
        const rolId = location.pathname.split('/').pop();
        await putRol(updateRol, Number(rolId));
        void Swal.fire({
          title: t('alertText.correctOperation'),
          text: t('alertText.rolEdit'),
          icon: 'success',
          confirmButtonText: t('generalButtonText.accept'),
        }).then(() => {
          navigate(PathNames.ROLES, { replace: true });
        });
      }
    } catch (error: any) {
      void Swal.fire({
        title: t('alertText.error'),
        text: t('alertText.errorDescription'),
        icon: 'error',
        confirmButtonText: t('generalButtonText.accept'),
      }).then(() => {
        navigate(PathNames.ROLES, { replace: true });
      });
      throw error;
    }
  };

  const loadPermissions = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const permissions = await getAllPermissions(); // Obtengo la lista de permisos
      console.log('permissions', permissions);
      setPermissionList(permissions);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadRolData = async () => {
    setError(null);
    if (!id) {
      setrolData({ typeRole: '', state: true, permissions: [] });
      return;
    }
    try {
      const rolDataById = await getRolId(Number(id));
      setrolData(rolDataById);
    } catch (error) {
      setError(error as Error);
    }
  };

  useEffect(() => {
    loadPermissions();
    reset(rolData);
  }, [rolData]);

  return {
    permissionList,
    isLoading,
    id,
    error,
    rolData,
    errors,
    addRole,
    removeRole,
    remove,
    loadPermissions,
    loadRolData,
    register,
    handleSubmit,
    onSubmit,
    reset,
  };
};
