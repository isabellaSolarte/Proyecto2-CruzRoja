import { useEffect, useState } from "react";
import { getVolunteerById } from '../../../services';
import { VolunteerUserInfo } from '../types/useInfoType';

export const useUserPage = (id: number) => {
  const [loading, setLoading] = useState(true); // Estado para indicar si los datos se están cargando
  const [volunteerInfo, setVolunteerInfo] = useState<VolunteerUserInfo | null>(null);

  const fetchVolunteerInfo = async () => {
    try {
      const volunteerData = await getVolunteerById(id);
      const rolesArray = volunteerData.roles.map(role => role.typeRole); // Transforma los roles a un array de strings
      const volunteerInfoData: VolunteerUserInfo = {
        documentType: volunteerData.documentType,
        names: volunteerData.names,
        lastNames: volunteerData.lastNames,
        personalPhone: volunteerData.personalPhone,
        personalEmail: volunteerData.personalEmail,
        username: volunteerData.username,
        roles: rolesArray,
      };
      setVolunteerInfo(volunteerInfoData);
    } catch (error) {
      console.error("Error fetching volunteer info:", error);
    } finally {
      setLoading(false); // Cambia el estado de carga a false cuando se completó la obtención de datos
    }
  };

  useEffect(() => {
    void fetchVolunteerInfo();
  }, [id]);

  return {
    volunteerInfo,
    loading, // Devuelve el estado de carga para mostrar un indicador de carga si es necesario
    fetchVolunteerInfo,
  };
};
