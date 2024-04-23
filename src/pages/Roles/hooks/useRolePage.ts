import { useEffect, useState } from "react";
import { getAllRoles } from "../../../services/AxiosRequests/Roles/roleRequest";
import { RoleModel } from "../../../models";

export const useRolePage = () => {
    const [roles, setRoles] = useState<RoleModel[] | undefined>(undefined);
  
    const fetchRoles = async () => {
      try {
        const rolesData = await getAllRoles();
        const adaptedRoles = rolesData.map((role) => ({
          id: role.id,
          typeRole: role.typeRole,
          permissions: role.permissions, 
        }));
        setRoles(adaptedRoles);
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };
  
    useEffect(() => {
      void fetchRoles();
    }, []);
  
    return {
      roles,
      fetchRoles
    };
};
  