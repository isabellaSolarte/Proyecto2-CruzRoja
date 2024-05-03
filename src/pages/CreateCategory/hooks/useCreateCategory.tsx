import { useEffect, useState } from 'react';
import { getCategoryById } from './../../../services/AxiosRequests/Categories/categoriesRequest'; // Asegúrate de importar correctamente tu función para obtener la categoría por ID
import { CategoryModel } from '../../../models';


export const useCategoryById = (categoryId: number) => {
    const [category, setCategory] = useState<CategoryModel | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);
  
    const loadCategoryById = async () => {
      setError(null);
      setLoading(true);
      try {
        const response = await getCategoryById(categoryId);
        setCategory(response);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };
  
    return { category, loading, error, loadCategoryById };
  };

  