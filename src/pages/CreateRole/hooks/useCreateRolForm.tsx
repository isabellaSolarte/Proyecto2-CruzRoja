import { useState, useEffect, useMemo } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { PermissionModel } from '../../../models';
import { RoleModel } from '../../../models';
import { yupResolver } from '@hookform/resolvers/yup';
import { defaultRolSchema } from '../schemas/RolSchema';
import { rolSchemaValidation } from '../schemas/RolSchema';
import { getRolId, putRol } from '../../../services/AxiosRequests/Roles/roleRequest';
import { getAllPermissions } from '../../../services/Permissions/permissionsRequest';
import { useNavigate } from 'react-router-dom';
import { PathNames } from '../../../core';
import { postRol } from './../../../services/AxiosRequests/Roles/roleRequest';
import { RoleFormType } from '../types/RoleFormType';
import { adaptFrontRolModelToDTO } from '../../../services/Adapters_DTO';

// TODO agregarPermiso y  hacer la peticion de crear rol con la lista de permisos
export const useCreateRolForm = (
  updateRolData: (newUserData: RoleModel) => void,
  initialId?: string,  // Optional initial id
) => {
  const [id, setId] = useState<string | undefined >(initialId); // State for id
  const [permissionList, setPermissionList] = useState<PermissionModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [rolData, setrolData] = useState<RoleFormType | undefined>(undefined)

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
    //remove(Index);
    //register(`permissions.${fields.length}.id`);
  };

  const onSubmit = async () => {
    
    const updateRol = {
      ...getValues(),
    }
    
    try {
      if(PathNames.CREATE_ROLE.toString() === location.pathname){
        if(updateRol.permissions.length > 0){
          await postRol(updateRol);
          alert(`Se ha creado el rol ${updateRol.typeRole} correctamente`);
        }else{
          alert(`Debe seleccionar permisos a el rol ${updateRol.typeRole}`);
        }

      }else{

        const rolId = location.pathname.split('/').pop();
        await putRol(updateRol, Number(rolId))
        alert(`Se ha actualizado el rol ${updateRol.typeRole} correctamente`);

      }
      navigate(PathNames.ROLES, { replace: true });
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
      //setValue('permissions', rolDataById.permissions);
  /*     addedPermissions = rolDataById.permissions
      setActualPermissionList(rolDataById.permissions)
      rolDataById.permissions.forEach((permiso) => {
        addRole(permiso);
      }); */
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
    onSubmit
  };
};
