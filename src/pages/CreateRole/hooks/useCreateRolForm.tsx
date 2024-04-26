import { useState, useEffect, useMemo } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { PermissionModel } from '../../../models';
import { RoleModel } from '../../../models';
import { yupResolver } from '@hookform/resolvers/yup';
import { defaultRolSchema } from '../schemas/RolSchema';
import { rolSchemaValidation } from '../schemas/RolSchema';
import { getRolId } from '../../../services/AxiosRequests/Roles/roleRequest';
import { getAllPermissions } from '../../../services/Permissions/permissionsRequest';
import { useNavigate } from 'react-router-dom';
import { PathNames } from '../../../core';
import { postRol } from './../../../services/AxiosRequests/Roles/roleRequest';
import { RoleFormType } from '../types/RoleFormType';
import { adaptFrontRolModelToDTO } from '../../../services/Adapters_DTO';

// TODO agregarPermiso y  hacer la peticion de crear rol con la lista de permisos
export const useCreateRolForm = (
  updateRolData: (newUserData: RoleModel) => void,
  initialId?: string  // Optional initial id
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
    //console.log('error', errors);
  };

  const onSubmit = async () => {
    console.log('Entra con el editar', getValues());
    console.log('Entra con el editar', initialId);
    console.log('Entra con el editar', id);
    
    const permisos = getValues().permissions.map(permiso => ({
      idPermission: permiso.id,
      name: permiso.name,
      description: permiso.description
    }));
/*     const updateRol = {
      ...getValues(),
      permissions: permisos,
    } */
    const updateRol: RoleFormType = {
      ...getValues(),
      permissions: permisos,
    }

    console.log('ROL EN ONSUBMIT', updateRol);
    try {
      await postRol(updateRol);
      alert(`Se ha creado el rol ${updateRol.typeRole} correctamente`);
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
      setValue('permissions', rolDataById.permissions);
      /* rolDataById.permissions.map((permiso)=>{
        addRole(permiso)
        console.log(permiso);
        
      }) */
      /* addRole(rolDataById.permissions[0]) */
    } catch (error) {
      setError(error as Error); 
    }
  }

/*   useEffect(() => {
    reset(rolData);
  }, [rolData]); */

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
    remove,
    loadPermissions,
    loadRolData,
    register,
    handleSubmit,
    onSubmit
  };
};
