import { useEffect, useState } from "react";
import { getActionById, getAllActions } from "../../../services/AxiosRequests/Actions/actionsRequest";
import { ActionsModel } from "../../../models/Actions";

export const useActionsPage = () => {
  const [loading, setLoading] = useState(true);
  const [actions, setActions] = useState<ActionsModel[]>([]);
  const [action, setAction] = useState<ActionsModel>();
  const [error, setError] = useState<string | null>(null);
  const [id, setId] = useState<number>();


  const fetchActions = async () => {
    try {
      const actionsData = await getAllActions();
      if (Array.isArray(actionsData) && actionsData.length > 0) {
        const adaptedActions = actionsData.map((action) => ({
          id: action.id,
          name: action.name,
          description: action.description,
          unitaryPrice: action.unitaryPrice,
          footPrintUnity: action.footPrintUnity,
          quantity: action.quantity,
        }));
        setActions(adaptedActions);
        setError(null);
      } else {
        setActions([]);
        setError("No se encontraron acciones en la base de datos.");
      }
    } catch (error) {
      setError("No se pueden obtener las acciones en este momento. Por favor, inténtalo de nuevo más tarde.");
      console.error("Error fetching actions:", error);
    } finally {
      setLoading(false);
    }
  };
  const fetchActionById = async (id: number) => {
    try {
      const actionData = await getActionById(id);
      setAction(actionData);
      setError(null);
    } catch (error) {
      setError("No se puede obtener la acción en este momento. Por favor, inténtalo de nuevo más tarde.");
      console.error("Error fetching action by ID:", error);
    } finally {
      setLoading(false);
    }
  };
  
    useEffect(() => {
        if (id !== undefined) {
          fetchActionById(id);
        }
    }, [id]);

  

  useEffect(() => {
    console.log("Updated action:", action);
  }, [action]);
  
  const updateActionInfo = (updatedActions: ActionsModel[]) => {
    setActions(updatedActions);
  };

  useEffect(() => {
    void fetchActions();
  }, []);

  return {
    actions,
    action,
    loading,
    error,
    setId,
    fetchActions,
    fetchActionById,
    updateActionInfo
  };

};
