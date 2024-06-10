import { CategoryModel } from "../../../models";

export type CategoryType = Pick<CategoryModel, 'name'|'descripction'|'scope'>