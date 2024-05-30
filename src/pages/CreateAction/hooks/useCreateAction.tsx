import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { PathNames } from '../../../core';
import { getActionById, postAction, putAction } from '../../../services/AxiosRequests/Actions/actionsRequest';
import { ActionType } from '../Types/ActionType';

export const useCreateAction = () => {
  const [action, setAction] = useState<ActionType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const navigate = useNavigate();

  const loadActionById = async (actionId: number) => {
    setError(null);
    setLoading(true);
    try {
      const response = await getActionById(actionId);
      setAction(response);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  const createOrUpdateAction = async (data: ActionType) => {
    try {
      let response;
      if (PathNames.CREATE_ACTIONS === location.pathname) {
        response = await postAction(data);
        Swal.fire({
          title: '¡Éxito!',
          text: 'Acción creada correctamente',
          icon: 'success',
          confirmButtonText: 'Aceptar',
        });
      } else {
        const actionId = location.pathname.split('/').pop();
        response = await putAction(data, Number(actionId));
        Swal.fire({
          title: '¡Éxito!',
          text: 'Acción actualizada correctamente',
          icon: 'success',
          confirmButtonText: 'Aceptar',
        });
      }
      navigate(PathNames.ACTIONS);
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'Hubo un problema al procesar la solicitud',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
      throw error;
    }
  };

  return { action, loading, error, loadActionById, createOrUpdateAction };
};
