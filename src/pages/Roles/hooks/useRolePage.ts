import { useEffect, useState } from "react";
import { getAllRoles } from "../../../services/AxiosRequests/Roles/roleRequest";
import { RoleModel } from "../../../models";

export const useRolePage = () => {
  const [loading, setLoading] = useState(true);
  const [roles, setRoles] = useState<RoleModel[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchRoles = async () => {
    try {
      const rolesData = await getAllRoles();
      if (Array.isArray(rolesData) && rolesData.length > 0) {
        const adaptedRoles = rolesData.map((role) => ({
          id: role.id,
          state: role.state,
          typeRole: role.typeRole,
          permissions: role.permissions,
        }));
        setRoles(adaptedRoles);
        setError(null);
      } else {
        setRoles([]);
        setError("No se encontraron roles en la base de datos.");
      }
    } catch (error) {
      setError("No se pueden obtener los roles en este momento. Por favor, inténtalo de nuevo más tarde.");
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
    loading,
    error,
    fetchRoles,
    updateRoleInfo
  };
};
