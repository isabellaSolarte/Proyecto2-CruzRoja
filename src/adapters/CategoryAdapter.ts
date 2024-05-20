/* eslint-disable @typescript-eslint/no-explicit-any */
import { CategoryModel } from '../models';

export const CategoryAdapter = (externalCategory: any): CategoryModel => {
  return {
    id: externalCategory.categoryId,
    name: externalCategory.categoryName,
    descripction: externalCategory.categoryDescription,
    scope: externalCategory.categoryScope,
    state: externalCategory.categoryState,
    pollutans: externalCategory.pollutants ? externalCategory.pollutants : [],
  };
};
