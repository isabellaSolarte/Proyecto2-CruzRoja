import { useState, useEffect } from 'react';
import { CategoryModel } from '../../../models';
import { getCategories, putCategory, updateStatetoCategory } from '../../../services/AxiosRequests/Categories';

export const useCategoriesForm = ()=>{

    const[categoryList,setCategoryList] = useState<CategoryModel[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const loadCategories = async()=>{
        setIsLoading(true);
        setError(null);

        try {
            const categories = await getCategories(); 
            console.log('categories:', categories);
            setCategoryList(categories);
        } catch (error) {
            setError(error as Error);
        } finally {
         setIsLoading(false);
        }

    }
    const handleCategorySelect = async (idCategory: number, currentState: boolean) => {
        const newState = !currentState;
        console.log('currentState:', currentState);
    try {
        const category = categoryList.find(category => category.id === idCategory);
        if (!category) {
            throw new Error('Category not found');
        }

        const updatedCategory = { ...category, state: newState };

        await updateStatetoCategory(updatedCategory, idCategory);

        setCategoryList((prevList) => prevList.map((category) => 
            category.id === idCategory ? { ...category, state: newState } : category
        ));
    } catch (error) {
        console.error("Error updating category state:", error);
    }
    };
    useEffect(() => {
        loadCategories();
    }, []);

    return{
        isLoading,
        error,
        categoryList,
        setCategoryList,
        handleCategorySelect
    }
}