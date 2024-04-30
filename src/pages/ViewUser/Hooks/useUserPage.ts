/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { getCompayUserById, getVolunteerById } from '../../../services';
import { useNavigate, useParams } from 'react-router-dom';
import { PathNames } from '../../../core';

export const useUserPage = () => {
  const { type: userType } = useParams();
  const [loading, setLoading] = useState(false); // Estado para indicar si los datos se están cargando
  const [userData, setUserData] = useState<any | undefined>(undefined); // Inicializa con undefined
  const [error, setError] = useState<Error | null>(null);
  const navigate = useNavigate();

  const loadUserDataByID = async (userId: number) => {
    setError(null);
    setLoading(true);
    try {
      let response;
      if (userType === 'volunteer') {
        response = await getVolunteerById(userId);
      } else {
        response = await getCompayUserById(userId);
      }
      setUserData(response);
      setLoading(false);
    } catch (error) {
      setError(error as Error);
    }
  };

  const handleEdit = () => {
    navigate(
      PathNames.EDIT_USER.replace(':id', userData.id).replace(
        ':type',
        userType ? userType : 'volunteer',
      ),
      {
        replace: true,
      },
    );
  };

  return {
    userData,
    loading,
    error,
    loadUserDataByID,
    handleEdit,
  };
};