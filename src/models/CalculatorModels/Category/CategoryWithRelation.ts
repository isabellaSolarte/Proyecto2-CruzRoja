import { PollutionTypeModel } from "../PollutionType";

export interface CategoryWithRelation{
    categoryId: number;
    categoryName: string;
    categoryDescription: string;
    categoryScope: string;
    categoryStatus: boolean;
    categoryPollution: PollutionTypeModel[];
}