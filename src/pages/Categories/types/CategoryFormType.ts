import { CategoryModel } from "../../../models";

export type CategoryFormType = Pick<CategoryModel, 'name'|'descripction'|'scope'>