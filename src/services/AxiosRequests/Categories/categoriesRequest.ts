import { CategoryAdapter } from "../../../adapters";
import { api } from '../api';
import { CategoriesEndpoints } from "./Endpoints";
import { CategoryModel } from "../../../models";

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

  


