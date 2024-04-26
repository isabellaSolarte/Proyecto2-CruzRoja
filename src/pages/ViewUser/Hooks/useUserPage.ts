import { useState } from 'react';
import { getVolunteerById } from '../../../services';
import { CompanyUserModel, VolunterUserModel } from '../../../models';

export const useUserPage = () => {
  const [loading, setLoading] = useState(false); // Estado para indicar si los datos se están cargando
  const [userData, setUserData] = useState<
    VolunterUserModel | CompanyUserModel | undefined
  >(undefined); // Inicializa con undefined
  const [error, setError] = useState<Error | null>(null);

  const loadUserDataByID = async (userId: number) => {
    setError(null);
    setLoading(true);
    try {
      const response = await getVolunteerById(userId);
      setUserData(response);
      setLoading(false);
    } catch (error) {
      setError(error as Error);
    }
  };

  return {
    userData,
    loading,
    error,
    loadUserDataByID,
  };
};
