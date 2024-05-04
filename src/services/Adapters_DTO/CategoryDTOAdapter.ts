import { CategoryType } from "../../pages/CreateCategory/types/CategoryTypes";

// Define el formato de datos esperado por el servidor (DTO)
interface CategoryDTO {
  categoryName: string;
  categoryDescription: string;
  categoryScope: string;
}

// Función para adaptar una categoría del modelo de la aplicación al formato del servidor
export const adaptCategoryModelToDTO = (category: CategoryType): CategoryDTO => {
  return {
    categoryName: category.name,
    categoryDescription: category.descripction, // Ajusta según sea necesario.
    categoryScope: category.scope,
  };
};