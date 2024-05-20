import { CategoryAdapter } from '../../../adapters';
import { api } from '../api';
import { CategoriesEndpoints } from './Endpoints';
import { CategoryModel } from '../../../models';
import { adaptCategoryModelToDTO } from '../../Adapters_DTO/CategoryDTOAdapter';
import { AxiosResponse } from 'axios';
import { CategoryType } from '../../../pages/CreateCategory/types/CategoryTypes';
import { CategoryByIds, CategoryWithRelation } from '../../../models/CalculatorModels/Category';

export const getCategories = async (): Promise<CategoryModel[]> => {
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
export const getCategoriesEnable = async (): Promise<CategoryModel[]> => {
  try {
    const response = await api.get<any[]>(CategoriesEndpoints.getCategoriesEnabled);
    const adaptedCategories: CategoryModel[] = response.data.map(
      (category: any) => CategoryAdapter(category),
    );
    return adaptedCategories;
  } catch (error) {
    throw new Error(JSON.stringify(error));
  }
};
export const postSelectedCategories = async (data: CategoryByIds): Promise<CategoryModel[]> => {
  console.log(JSON.stringify(data));
  try {
    const response = await api.post<CategoryModel[]>(CategoriesEndpoints.postSelectedCategories,data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCategoryById = async (
  categoryId: number,
): Promise<CategoryModel> => {
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
    const AdaptedCategory = adaptCategoryModelToDTO(data);

    const updatedCategoryData = {
      ...AdaptedCategory,
    };
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
    const AdaptedCategory = adaptCategoryModelToDTO(data);
    const updatedCategoryData = {
      ...AdaptedCategory,
      categoryId: id,
    };
    const response = await api.put<AxiosResponse>(
      CategoriesEndpoints.putCategory,
      updatedCategoryData,
    );
    return response;
  } catch (error) {
    throw error;
  }
};
