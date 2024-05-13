import { CategoryAdapter } from "../../../adapters";
import { api } from '../api';
import { CategoriesEndpoints } from "./Endpoints";
import { CategoryModel } from "../../../models";
import { adaptCategoryModelToDTO } from "../../Adapters_DTO/CategoryDTOAdapter";
import { AxiosResponse } from "axios";
import { CategoryType } from "../../../pages/CreateCategory/types/CategoryTypes";

export const getCategories = async():Promise<CategoryModel[]> => {
    try {
      const response = await api.get<any[]>(CategoriesEndpoints.getAllCategories);
      const adaptedCategories: CategoryModel[] = response.data.map(
        (category: any) => CategoryAdapter(category),
      );
      return adaptedCategories;
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  };

  export const getCategoryById = async (categoryId: number): Promise<CategoryModel> => {
    try {
      const response = await api.get(`/categories/${categoryId}`);
      const adaptedCategory: CategoryModel = CategoryAdapter(response.data);
      return adaptedCategory;
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  };

  export const postCategory = async (data: CategoryType) => {
    try {
      const AdaptedCategory = adaptCategoryModelToDTO( data)
      
      const updatedCategoryData = {
        ...AdaptedCategory
      };
      console.log("datos a enviar a put:",updatedCategoryData)
      const response = await api.post<AxiosResponse>(
        CategoriesEndpoints.postCategory,
        updatedCategoryData,
      );
  
      return response;
    } catch (error) {
      throw error;
    }
  };
  
  export const putCategory = async (data: CategoryType, id: number) => {
    try {
      const AdaptedCategory = adaptCategoryModelToDTO( data)
      const updatedCategoryData = {
      ...AdaptedCategory,
      categoryId: id
    };
      console.log("datos a enviar a put:",updatedCategoryData)
      const response = await api.put<AxiosResponse>(
        CategoriesEndpoints.putCategory,
        updatedCategoryData,
      );
      return response;
    } catch (error) {
      throw error;
    }
  };

  


