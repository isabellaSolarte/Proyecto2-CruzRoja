import { useState, useEffect } from 'react';
import axios from 'axios'; // Asegúrate de tener axios instalado: npm install axios
import { ActionType } from '../types/ActionType';
import { getAllActions } from '../../../../services/AxiosRequests/Actions';


const useActions = () => {
    const [actions, setActions] = useState<ActionType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchActions = async () => {
            try {
                setLoading(true);
                const response2 = await getAllActions(); // TOD: Cambia esto por el endpoint correcto
                console.log(response2);

                const updatedActions = response2.map((action) => ({
                    ...action,
                    footPrintUnity: 100,
                    quantity: 2,
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
