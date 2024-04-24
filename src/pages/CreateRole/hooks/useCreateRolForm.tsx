import { useState, useEffect } from 'react';
import { PermissionModel } from '../../../models';
import { getAllPermissions } from '../../../services/Permissions/permissionsRequest';
// TODO agregarPermiso y  hacer la peticion de crear rol con la lista de permisos
export const useCreateRolForm = () => {
  const [permissionList, setPermissionList] = useState<PermissionModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

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
  };

  useEffect(() => {
    loadPermissions();
  }, []); // Para renderizar los permisos solo en la carga inicial

  return { permissionList, isLoading, error, loadPermissions };
};
