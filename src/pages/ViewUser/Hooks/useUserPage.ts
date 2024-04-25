import { useEffect, useState } from "react";
import { getVolunteerById } from '../../../services';
import { VolunteerUserInfo } from '../types/useInfoType';
import { VolunterUserModel } from "../../../models";


export const useUserPage = (id: string) => {
  const [loading, setLoading] = useState(true); // Estado para indicar si los datos se están cargando
  const [volunteerData, setVolunteerData] = useState<VolunterUserModel>();  // Inicializa con undefined
  const [volunteerInfo, setVolunteerInfo] = useState<VolunteerUserInfo>();
  const [idVolunteer, setidVolunteer] = useState<string>(id); 
  const [error, setError] = useState<Error | null>(null);

  /*const fetchVolunteerInfo = async () => {
    try {
      //const volunteerData = await getVolunteerById(id);
      const rolesArray = volunteerData.roles.map(role => role.typeRole); // Transforma los roles a un array de strings
      const volunteerInfoData: VolunteerUserInfo = {
        documentType: volunteerData.documentType,
        names: volunteerData.names,
        lastNames: volunteerData.lastNames,
        personalPhone: volunteerData.personalPhone,
        personalEmail: volunteerData.personalEmail,
        username: volunteerData.username,

      };
      setVolunteerInfo(volunteerInfoData);
    } catch (error) {
      console.error("Error fetching volunteer info:", error);
    } finally {
      setLoading(false); // Cambia el estado de carga a false cuando se completó la obtención de datos
    }
  };*/


  const loadIdVolunteerData = async () => {
    setError(null)
    setidVolunteer(id)
    try {
      
      const volunterById = await getVolunteerById(Number(idVolunteer)); // Obtengo la lista de permisos
      setVolunteerData(volunterById);
      const volunteerInfoData: VolunteerUserInfo = {
        documentType: volunterById.documentType,
        names: volunterById.names,
        lastNames: volunterById.lastNames,
        personalPhone: volunterById.personalPhone,
        personalEmail: volunterById.personalEmail,
        username: volunterById.username,
      };
      setVolunteerInfo(volunteerInfoData)
      console.log(idVolunteer)
    } catch (error) {
      setError(error as Error); 
    }
  }

 /* useEffect(() => {
    void fetchVolunteerInfo();
  }, [id]);
*/
  return {
    volunteerInfo,
    loading, // Devuelve el estado de carga para mostrar un indicador de carga si es necesario
    volunteerData, 
    loadIdVolunteerData,
    //fetchVolunteerInfo,
  };
};
