import { CategoryModel } from "../../models";


// Define el formato de datos esperado por el servidor (DTO)
interface CategoryDTO {
  categoryName: string;
  categoryDescription: string;
  categoryScope: string;
  categoryState: boolean;
}

// Función para adaptar una categoría del modelo de la aplicación al formato del servidor
export const adaptCategoryModelToDTOStatus = (category: CategoryModel): CategoryDTO => {
  return {
    categoryName: category.name,
    categoryDescription: category.descripction, // Ajusta según sea necesario.
    categoryScope: category.scope,
    categoryState: category.state,
  };
};