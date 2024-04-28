import { RoleModel } from "../../../models";

export type RoleFormType = Pick<RoleModel, 'typeRole'|'state'|'permissions'>