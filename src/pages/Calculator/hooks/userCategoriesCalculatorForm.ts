import { useState, useEffect, useContext } from 'react';
import { CategoryModel } from '../../../models';
import { getCategoriesEnable, postSelectedCategories } from '../../../services/AxiosRequests/Categories';
import { CategoryByIds, CategoryWithRelation } from '../../../models/CalculatorModels/Category';
import { CalculatorContext, CalculatorFormProvider } from '../../../contexts';

export const useCategoriesCalculatorForm = ()=>{

    const[categoryList,setCategoryList] = useState<CategoryModel[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const [selectedCategory, setSelectedCategories] = useState<number[]>([]);
    const [categoryByIds, setCategoryByIds] = useState<CategoryByIds>({ ids: [] });
    const [selectedCategoriesComplete, setSelectedCategoriesComplete] = useState<CategoryModel[]>([]);
    //exporto la funcion de calculator provider
    const { setCalculatorState} = useContext(CalculatorContext);

    const loadCategories = async()=>{
        setIsLoading(true);
        setError(null);

        try {
            const categories = await getCategoriesEnable(); 
            setCategoryList(categories);
        } catch (error) {
            setError(error as Error);
        } finally {
         setIsLoading(false);
        }

    }
   const handleCategorySelect = (idCategory: number) => {
    setSelectedCategories((prevSelected: number[]) => {
        const newSelected = prevSelected.includes(idCategory) 
            ? prevSelected.filter((id: number) => id !== idCategory)
            : [...prevSelected, idCategory];
        
        setSelectedCategories(newSelected);
        // Actualizar categoryByIds con los IDs seleccionados
        setCategoryByIds({ ids: selectedCategory });
        
        return newSelected;
    });
};
    const saveSelectedCategories = async () => {
        console.log(categoryByIds);
        try {
            const response = await postSelectedCategories({ ids: selectedCategory }); 
            console.log(response);
            setSelectedCategoriesComplete(response);
            console.log(selectedCategoriesComplete);
            setCalculatorState(selectedCategoriesComplete);
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
        isLoading,
        error,
        categoryList,
        selectedCategory,
        handleCategorySelect,
        saveSelectedCategories
    }
}