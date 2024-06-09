import { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { PathNames } from '../../../core';
import { getCompensationPlanById } from "../../../services/AxiosRequests/Plans";
import { CompensationPlanModel } from "../../../models/CompensationPlan/CompensationPlanModel";
import { defaultCompensationPlan } from "../../CreateCompensationPlan/schemas/CompensationPlanSchema";
import { CompensationPlanActionModel } from "../../../models/Actions";
import { stringify } from "querystring";

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
    

    const fetchPlan = async () => {
        try {
          const plan = await getCompensationPlanById(Number(id));
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
    return {
        currentPlan,
        currentActionsPlan,  
        loading,
        fetchPlan,
        error,
        handleEdit
    };
};

