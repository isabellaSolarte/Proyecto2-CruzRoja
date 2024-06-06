import { useState } from "react";
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { PathNames } from '../../../core';
import { getCompensationPlanById } from "../../../services/AxiosRequests/Plans";
import { CompensationPlanModel } from "../../../models/CompensationPlan/CompensationPlanModel";
import { defaultCompensationPlan } from "../../CreateCompensationPlan/schemas/CompensationPlanSchema";

export const useViewCompensationPlan = () => {
    const [loading, setLoading] = useState(true);
    const [currentPlan, setCurrentPlan] = useState<CompensationPlanModel>(
      defaultCompensationPlan,
    );
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    const path = useLocation().pathname;
    const { id } = useParams();
    

    const fetchPlan = async () => {
        try {
          const plan = await getCompensationPlanById(Number(id), path.includes('custom') ? 'custom' : 'generic');
          setCurrentPlan(plan);
        } catch (error) {
          setError("No se pueden obtener el en este momento. Por favor, inténtalo de nuevo más tarde.");
          console.error("Error fetching plan:", error);
        } finally {
          setLoading(false);
        }
      };

    const handleEdit = () =>{
      navigate(
        PathNames.EDIT_PLAN.replace(':id', 'id'),
        {
          replace: true,
        },
      );
    }
    return {
        currentPlan,  
        loading,
        fetchPlan,
        error,
        handleEdit
    };
};

