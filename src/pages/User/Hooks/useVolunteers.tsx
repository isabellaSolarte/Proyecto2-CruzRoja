// src/hooks/useVolunteers.ts
import { useEffect, useState } from 'react';
import { getVolunteers } from '../../../services';
import { VolunterUserModel } from '../../../models/UserModels/VolunterUserModel';
import VolunteerInfoType from '../types/VolunteerInfoType';

const useVolunteers = () => {
  const [volunteers, setVolunteers] = useState<VolunterUserModel[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [volunteerInfo, setVolunteerInfo] = useState<VolunteerInfoType[]>([]);

  useEffect(() => {
    const fetchVolunteers = async () => {
      setLoading(true);
      try {
        const volunteersData = await getVolunteers();
        setVolunteers(volunteersData as VolunterUserModel[]);
        console.log('volunteersData:', volunteersData);
        // Map the volunteersData to the desired format
        const mappedVolunteers = volunteersData.map((volunteer) => {
          // Concatenate typeRole values into a single string
          const rolesString = volunteer.roles.map((role) => role.typeRole as string).join(', ');

          return {
            id: volunteer.id,
            names: volunteer.names,
            roles: rolesString, // Set roles to the concatenated string
            switchState: volunteer.state,
          };
        });

        setVolunteerInfo(mappedVolunteers as VolunteerInfoType[]);
        console.log('mappedVolunteers:', mappedVolunteers);
      } catch (error) {
        console.error('Error fetching volunteers:', error);
      }
      setLoading(false);
    };

    void fetchVolunteers();

    return () => {
      // Cleanup if needed
    };
  }, []);

  return { volunteers, setVolunteers, loading, volunteerInfo };
};

export default useVolunteers;
