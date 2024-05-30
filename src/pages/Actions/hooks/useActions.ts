import { useEffect, useState } from "react";
import { getAllActions } from "../../../services/AxiosRequests/Actions/actionsRequest";
import { ActionsModel } from "../../../models/Actions";

export const useActionsPage = () => {
  const [loading, setLoading] = useState(true);
  const [actions, setActions] = useState<ActionsModel[]>([]);
  const [error, setError] = useState<string | null>(null);

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

  const updateActionInfo = (updatedActions: ActionsModel[]) => {
    setActions(updatedActions);
  };

  useEffect(() => {
    void fetchActions();
  }, []);

  return {
    actions,
    loading,
    error,
    fetchActions,
    updateActionInfo
  };
};
