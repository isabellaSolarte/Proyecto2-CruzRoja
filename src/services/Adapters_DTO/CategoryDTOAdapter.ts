import { CategoryType } from "../../pages/CreateCategory/types/CategoryTypes";

// Define el formato de datos esperado por el servidor (DTO)
interface CategoryDTO {
  name: string;
  description: string;
  scope: string;
}

// Función para adaptar una categoría del modelo de la aplicación al formato del servidor
export const adaptCategoryModelToDTO = (category: CategoryType): CategoryDTO => {
  return {
    name: category.name,
    description: category.descripction, // Ajusta según sea necesario.
    scope: category.scope,
  };
};