import { useState, useEffect, useMemo } from 'react';
import { CategoryModel } from '../../../models';
import { getCategories } from '../../../services/AxiosRequests/Categories';

export const useCategoriesForm = ()=>{

    const[categoryList,setCategoryList] = useState<CategoryModel[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const loadCategories = async()=>{
        setIsLoading(true);
        setError(null);

        try {
            const categories = await getCategories(); // Obtengo la lista de permisos
            setCategoryList(categories);
        } catch (error) {
            setError(error as Error);
        } finally {
         setIsLoading(false);
        }

    }
    useEffect(() => {
        loadCategories();
    }, []);

    return{
        categoryList
    }
}