import { useEffect, useState } from "react";
import { getAllRoles } from "../../../services/AxiosRequests/Roles/roleRequest";
import { RoleModel } from "../../../models";

export const useRolePage = () => {
  const [loading, setLoading] = useState(true); // Estado para indicar si los datos se están cargando
  const [roles, setRoles] = useState<RoleModel[]>([]);

  const fetchRoles = async () => {
    try {
      const rolesData = await getAllRoles();
      const adaptedRoles = rolesData.map((role) => ({
        id: role.id,
        state: role.state,
        typeRole: role.typeRole,
        permissions: role.permissions,
        switchState: role.state, // Agrega la propiedad switchState
      }));
      setRoles(adaptedRoles);
    } catch (error) {
      console.error("Error fetching roles:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateRoleInfo = (updatedRoles: RoleModel[]) => {
    setRoles(updatedRoles);
  };

  useEffect(() => {
    void fetchRoles();
  }, []);

  return {
    roles,
    loading, // Devuelve el estado de carga para mostrar un indicador de carga si es necesario
    fetchRoles,
    updateRoleInfo // Método para actualizar la información de los roles
  };
};