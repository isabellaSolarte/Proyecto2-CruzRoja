// src/hooks/useVolunteers.ts
import { useEffect, useState } from 'react';
import { getVolunteers } from '../../../services';
import { VolunterUserModel } from '../../../models/UserModels/VolunterUserModel';

const useVolunteers = () => {
  const [volunteers, setVolunteers] = useState<VolunterUserModel[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchVolunteers = async () => {
        setLoading(true);
        try {
            const volunteersData = await getVolunteers();
            setVolunteers(volunteersData as VolunterUserModel[]);
            console.log('volunteersData:', volunteersData);
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

  return { volunteers, loading };
};

export default useVolunteers;
