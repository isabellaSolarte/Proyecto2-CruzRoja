import { RoleModel } from "../../../models";

export type RoleFormType = Pick<RoleModel, 'permissions'|'typeRole'>