import { useEffect, useState } from 'react';
import { getVolunteers } from '../../../services';
import { VolunterUserModel } from '../../../models/UserModels/VolunterUserModel';
import VolunteerInfoType from '../types/VolunteerInfoType';

const useVolunteers = () => {
  const [volunteers, setVolunteers] = useState<VolunterUserModel[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorVolunteers, setError] = useState<string | null>(null);
  const [volunteerInfo, setVolunteerInfo] = useState<VolunteerInfoType[]>([]);

  const updateVolunteerInfo = (updatedVolunteers: VolunterUserModel[]) => {
    const mappedVolunteers = mapVolunteersToInfo(updatedVolunteers);
    setVolunteerInfo(mappedVolunteers);
  };

  const mapVolunteersToInfo = (volunteersData: VolunterUserModel[]): VolunteerInfoType[] => {
    return volunteersData.map(volunteer => {
      const rolesString = volunteer.roles.map(role => role.typeRole as string).join(', ');
      return {
        id: volunteer.id,
        names: volunteer.names,
        roles: rolesString,
        switchState: volunteer.state,
      };
    });
  };

  const fetchVolunteers = async () => {
    setLoading(true);
    try {
      const volunteersData = await getVolunteers();
      setVolunteers(volunteersData as VolunterUserModel[]);
      const mappedVolunteers = mapVolunteersToInfo(volunteersData);
      setVolunteerInfo(mappedVolunteers);
      setError(null);
    } catch (error) {
      console.error('Error fetching volunteers:', error);
      //cuardo el error en el estado errores
      //si es 406 cambier
      setError(error.response.data.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    void fetchVolunteers();

    return () => {
      // Cleanup if needed
    };
  }, []);

  return { volunteers, setVolunteers, loading, errorVolunteers, volunteerInfo, updateVolunteerInfo };
};

export default useVolunteers;
