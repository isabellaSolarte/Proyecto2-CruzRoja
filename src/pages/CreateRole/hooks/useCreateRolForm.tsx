import { useState, useEffect, useMemo } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { PermissionModel } from '../../../models';
import { RoleModel } from '../../../models';
import { yupResolver } from '@hookform/resolvers/yup';
import { rolSchemaValidation } from '../schemas/RolSchema';
import { getRolId, putRol } from '../../../services/AxiosRequests/Roles/roleRequest';
import { getAllPermissions } from '../../../services/Permissions/permissionsRequest';
import { useNavigate } from 'react-router-dom';
import { PathNames } from '../../../core';
import { postRol } from './../../../services/AxiosRequests/Roles/roleRequest';
import { RoleFormType } from '../types/RoleFormType';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';

// TODO agregarPermiso y  hacer la peticion de crear rol con la lista de permisos
export const useCreateRolForm = (
  updateRolData: (newUserData: RoleModel) => void,
  initialId?: string,  // Optional initial id
) => {
  const { t } = useTranslation('commons');
  const [id, setId] = useState<string | undefined >(initialId); // State for id
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
    setValue,
    reset
  } = useForm({
    defaultValues: useMemo(() => {
      return rolData;
    }, [rolData]),
    
    resolver: yupResolver(rolSchemaValidation),
  });

  const { fields, append, update, remove } = useFieldArray({
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
        state: true //le asigno el estado del rol en true
    }
    
    try {
      if(PathNames.CREATE_ROLE.toString() === location.pathname){
        
        await postRol(updateRol);
        console.log("Datos enviador rol:", updateRol)
        void Swal.fire({
          title: t('alertText.rolCreate'),
          confirmButtonText: t('generalButtonText.accept'),
        }).then(() => {
          navigate(PathNames.ROLES, { replace: true });
        });
  

      }else{

        const rolId = location.pathname.split('/').pop();
        await putRol(updateRol, Number(rolId))
        console.log("Datos enviador rol:", updateRol)
        console.log("Datos id rol:", updateRol)
        void Swal.fire({
          title: t('alertText.rolEdit'),
          confirmButtonText: t('generalButtonText.accept'),
        }).then(() => {
          navigate(PathNames.ROLES, { replace: true });
        });

      }
    } catch (error: any) {
      alert(`Error creating user ${error.message}`);
    }

  };

  const loadPermissions = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const permissions = await getAllPermissions(); // Obtengo la lista de permisos
      setPermissionList(permissions);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  }
  const loadRolData = async () => {
    setError(null);
    setId(initialId)
    try {
      
      const rolDataById = await getRolId(Number(id));   
      setrolData(rolDataById);
    } catch (error) {
      setError(error as Error); 
    }
  }

  useEffect(() => {
    loadPermissions();
    reset(rolData);
  }, [rolData]); // Para renderizar los permisos solo en la carga inicial

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
    reset
  };
};
