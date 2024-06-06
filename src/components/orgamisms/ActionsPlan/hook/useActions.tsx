import { useState, useEffect } from 'react';
import { getAllActions } from '../../../../services/AxiosRequests/Actions';
import { CompensationPlanActionModel } from '../../../../models/Actions';


const useActions = () => {
    const [actions, setActions] = useState<CompensationPlanActionModel[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchActions = async () => {
            try {
                setLoading(true);
                const response2 = await getAllActions(); // TOD: Cambia esto por el endpoint correcto

                const updatedActions = response2.map((action) => ({
                    id: action.id,
                    action: action,
                    name: action.name,
                    description: action.description,
                    unitaryPrice: action.unitaryPrice,
                    footPrintUnity: action.footPrintUnity,
                    quantity: 1,
                    totalActionPrice: 0,
                    totalActionUfp: 0,
                }));

                setTimeout(() => {
                    setActions(updatedActions);
                    setLoading(false);
                    setError(null)
                }, 500);
            } catch (err) {
                setError('Error fetching actions',err.message);
                setLoading(false);
            }
        };

        void fetchActions();
    }, []);

    return { actions, loading, error };
};

export default useActions;
