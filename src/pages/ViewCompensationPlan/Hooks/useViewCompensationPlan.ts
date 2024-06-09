import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { PathNames } from '../../../core';
import { getCompensationPlanById } from "../../../services/AxiosRequests/Plans";
import { CompensationPlanModel } from "../../../models/CompensationPlan/CompensationPlanModel";
import { defaultCompensationPlan } from "../../CreateCompensationPlan/schemas/CompensationPlanSchema";
import { getVolunteerById } from "../../../services";
import { allowedPagesBaseOnPermissions } from "../../../utils";
import { UserModel } from "../../../models";
import { getActionById } from "../../../services/AxiosRequests/Actions";
import { ActionsModel } from "../../../models/Actions";

export const useViewCompensationPlan = () => {
    const [loading, setLoading] = useState(true);
    const [currentPlan, setCurrentPlan] = useState<CompensationPlanModel>(
      defaultCompensationPlan,
    );
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    const { id } = useParams();
    const [currentActionsPlan, setCurrentActionsPlan] = useState<any[]>(
    );
    const [actionSelect, setActionSelect] = useState<ActionsModel>();

    const [idAction, setIdAction] = useState<number>();

    let allowed;
    

    const fetchPlan = async () => {
        try {
          let userV;
          const plan = await getCompensationPlanById(Number(id));
          const idUser = plan.volunterId
          if (typeof idUser === 'number') {
            userV = await getVolunteerById(idUser);
          }
          allowed = allowedPagesBaseOnPermissions(userV as UserModel, 1005);
          setCurrentPlan(plan);
          setCurrentActionsPlan(plan.actions);
          console.log("PLAN"+JSON.stringify(plan))
        } catch (error) {
          setError("No se pueden obtener el en este momento. Por favor, inténtalo de nuevo más tarde.");
          console.error("Error fetching plan:", error);
        } finally {
          setLoading(false);
        }
      };

    const handleEdit = () =>{
      navigate(
        PathNames.EDIT_PLAN.replace(':id', id?.toString() || ''),
        {
          replace: true,
        },
      );
    }
    const handleAcquire = () =>{
      navigate(
        PathNames.EDIT_PLAN.replace(':id', id?.toString() || ''),
        {
          replace: true,
        },
      );
    }
    const fetchActionById = async (id: number) => {
      try {
        const actionData = await getActionById(id);
        setActionSelect(actionData);
        setError(null);
      } catch (error) {
        setError(
          'No se puede obtener la acción en este momento. Por favor, inténtalo de nuevo más tarde.',
        );
        console.error('Error fetching action by ID:', error);
      } finally {
        setLoading(false);
      }
    };
    useEffect(() => {
      if (idAction !== undefined) {
        fetchActionById(idAction);
      }
    }, [idAction]);
  
    useEffect(() => {
      console.log('Updated action:', actionSelect);
    }, [actionSelect]);
    return {
        currentPlan,
        currentActionsPlan,  
        loading,
        fetchPlan,
        error,
        handleEdit,
        handleAcquire, 
        allowed,
        fetchActionById,
        actionSelect,
        setIdAction
        
    };
};

