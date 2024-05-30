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
                // const response = {
                //     data: [
                //         { id: 1, name: 'Plantar Árboles', description: 'Descripción de Plantar Árboles', unitaryPrice: 10, footPrintUnity: 100, quantity: 3 },
                //         { id: 2, name: 'Reciclaje', description: 'Descripción de Reciclaje', unitaryPrice: 15, footPrintUnity: 10, quantity: 0 },
                //         // otras acciones
                //     ],
                // };

                const updatedActions = response2.map((action) => ({
                    ...action,
                    //description: '',
                    //unitaryPrice: 0,
                    footPrintUnity: 100,
                    quantity: 2,
                }));

                setTimeout(() => {
                    setActions(updatedActions);
                    //setActions(response.data);
                    setLoading(false);
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
