import { useState, useEffect } from 'react';
import { getAllActions } from '../../../../services/AxiosRequests/Actions';
import { CompensationPlanActionModel } from '../../../../models/Actions';


const useActions = (initialActions: CompensationPlanActionModel[]) => {
    const [actions, setActions] = useState<CompensationPlanActionModel[]>(initialActions);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchActions = async () => {
            try {
                setLoading(true);
                console.log('initialActions', actions);
                
                const response2 = await getAllActions();
                
                
                const updatedActions2 = response2.map((responseAction) => {
                    const action = actions.find(a => a.action.id === responseAction.id);
                    if (action) {
                        const totalActionPrice = action.action.unitaryPrice * action.quantity;
                        const totalActionUfp = action.action.footPrintUnity * action.quantity;
                        return { ...action, totalActionPrice, totalActionUfp };
                    } else {
                        return { 
                            id: responseAction.id,
                            action: responseAction,
                            name: responseAction.name,
                            description: responseAction.description,
                            unitaryPrice: responseAction.unitaryPrice,
                            footPrintUnity: responseAction.footPrintUnity,
                            quantity: 1,
                            totalActionPrice: 0,
                            totalActionUfp: 0, 
                        };
                    }
                });
                console.log('updatedActions2', updatedActions2);
                
                setTimeout(() => {
                    setActions(updatedActions2);
                    setLoading(false);
                    setError(null)
                }, 500);
            } catch (err) {
                setError(`Error fetching actions: ${err}`);
                setLoading(false);
            }
        };

        void fetchActions();
    }, []);

    return { actions,setActions, loading, error };
};

export default useActions;
