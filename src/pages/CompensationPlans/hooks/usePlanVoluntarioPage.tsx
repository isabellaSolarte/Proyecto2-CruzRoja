import { useEffect, useState } from "react";
import { getAllPlans } from "../../../services/AxiosRequests/Plans/PlanRequests";
import { CompensationPlanModel } from '../../../models/CompensationPlan/CompensationPlanModel';

export const useCompensationPlanVoluntarioPage = () => {
    const [loading, setLoading] = useState(true);
    const [compensationPlans, setCompensationPlans] = useState<CompensationPlanModel[]>([]);
    const [error, setError] = useState<string | null>(null);

    const fetchCompensationPlan = async () => {
        try {
            const compensationPlanData = await getAllPlans();
            console.log('compensationPlanData: ',compensationPlanData);

            if (Array.isArray(compensationPlanData) && compensationPlanData.length > 0) {
                const adaptedCompensationPlans = compensationPlanData.map((compensationPlan) => ({
                    id: compensationPlan.id,
                    name: compensationPlan.name,
                    description: compensationPlan.description,
                    price: compensationPlan.price,
                    discount: compensationPlan.discount,
                    actions: compensationPlan.actions,
                    ufpCompensation: compensationPlan.ufpCompensation,
                    total: compensationPlan.price - (compensationPlan.price * (compensationPlan.discount / 100))
                }));
                setCompensationPlans(adaptedCompensationPlans);
                setError(null);
            } 
            else {
                setCompensationPlans([]);
                setError("No se encontraron roles en la base de datos.");
            }
        } 
        catch (error) {
            setError("No se pueden obtener los roles en este momento. Por favor, inténtalo de nuevo más tarde.");
            console.error("Error fetching roles:", error);
        } finally {
            setLoading(false);
        }
    };

    const updateCompensationPlanInfo = (updatedCompensationPlans: CompensationPlanModel[]) => {
        setCompensationPlans(updatedCompensationPlans);
    };

    useEffect(() => {
        void fetchCompensationPlan();
    }, []);

    return {
        compensationPlans,
        loading,
        error,
        fetchCompensationPlan,
        updateCompensationPlanInfo
    };
}