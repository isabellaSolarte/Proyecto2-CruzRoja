import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { PermissionModel } from '../../../models';
import { RoleModel } from '../../../models';
import { yupResolver } from '@hookform/resolvers/yup';
import { defaultRolSchema } from '../schemas/RolSchema';
import { rolSchemaValidation } from '../schemas/RolSchema';
import { getRolId } from '../../../services/AxiosRequests/Roles/roleRequest';
import { getAllPermissions } from '../../../services/Permissions/permissionsRequest';
// TODO agregarPermiso y  hacer la peticion de crear rol con la lista de permisos
export const useCreateRolForm = (
  updateRolData: (newUserData: RoleModel) => void,
  initialId?: string  // Optional initial id
) => {
  const [id, setId] = useState<string | undefined >(initialId); // State for id
  const [permissionList, setPermissionList] = useState<PermissionModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [rolData, setrolData] = useState<RoleModel>(
    defaultRolSchema,
  );

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    getValues,
  } = useForm<RoleModel>({
  });

  const onSubmit = async (data: RoleModel) => {
    await new Promise(resolve => setTimeout(resolve, 0));
    updateRolData({ ...data});
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
    console.log(typeof Number(id))
    try {
      
      const rolDataById = await getRolId(Number(id)); // Obtengo la lista de permisos
      setrolData(rolDataById);
    } catch (error) {
      setError(error as Error); 
    }
  }

  useEffect(() => {
    loadPermissions();
  }, []); // Para renderizar los permisos solo en la carga inicial

  return { 
    permissionList, 
    isLoading, 
    id,
    error,
    rolData, 
    loadPermissions,
    loadRolData,
    register,
    handleSubmit,
    onSubmit
  };
};
