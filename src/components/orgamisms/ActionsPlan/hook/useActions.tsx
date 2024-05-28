import { useState, useEffect } from 'react';
import axios from 'axios'; // Asegúrate de tener axios instalado: npm install axios
import { ActionType } from '../types/ActionType';

const useActions = () => {
    const [actions, setActions] = useState<ActionType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchActions = async () => {
            try {
                setLoading(true);
                //const response = await axios.get(); // TOD: Cambia esto por el endpoint correcto
                const response = {
                    data: [
                        { id: 1, name: 'Plantar Árboles', ufp: 100, cantidad: 5, costo: 1000 },
                        { id: 2, name: 'Reciclaje', ufp: 50, cantidad: 10, costo: 500 },
                        // otras acciones
                    ],
                };
                setTimeout(() => {
                    setActions(response.data);
                    setLoading(false);
                }, 3000);
            } catch (err) {
                setError('Error fetching actions');
                setLoading(false);
            }
        };

        void fetchActions();
    }, []);

    return { actions, loading, error };
};

export default useActions;
