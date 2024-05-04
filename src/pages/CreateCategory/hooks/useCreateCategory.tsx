import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { PathNames } from '../../../core';
import { getCategoryById } from './../../../services/AxiosRequests/Categories/categoriesRequest';
import { CategoryModel } from '../../../models';
import { postCategory, putCategory } from './../../../services/AxiosRequests/Categories/categoriesRequest';
import { CategoryType } from '../types/CategoryTypes';

export const useCreateCategory = () => {
  const [category, setCategory] = useState<CategoryModel | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const navigate = useNavigate();

  const loadCategoryById = async (categoryId: number) => {
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

  const createOrUpdateCategory = async (data: CategoryType) => {
    try {
      let response;
      if (PathNames.CREATE_CATEGORY === location.pathname) {
        console.log("Intentando crear")
        console.log("datos enviados para crear:",data)
        response = await postCategory(data);
        console.log(response)
        Swal.fire({
          title: '¡Éxito!',
          text: 'Categoría creada correctamente',
          icon: 'success',
          confirmButtonText: 'Aceptar',
        });
      } else {
        const CategoryId = location.pathname.split('/').pop();
        console.log("Intentando actualizar")
        console.log("datos enviados para actualizar:",data)
        console.log(CategoryId)
        
        response = await putCategory(data,Number(CategoryId));

        console.log(response)
        Swal.fire({
          title: '¡Éxito!',
          text: 'Categoría actualizada correctamente',
          icon: 'success',
          confirmButtonText: 'Aceptar',
        });
      }
      navigate(PathNames.CATEGORIES);
    } catch (error) {
      // Manejo de errores
      Swal.fire({
        title: 'Error',
        text: 'Hubo un problema al procesar la solicitud',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
      throw error;
    }
  };

  return { category, loading, error, loadCategoryById, createOrUpdateCategory };
};
