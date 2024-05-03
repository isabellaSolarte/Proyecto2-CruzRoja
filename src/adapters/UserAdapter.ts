/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserModel } from '../models';
import { RolAdapter } from './RoleAdapter';
import { PathNames } from '../core/PathNames';

export const UserAdapter = (externalUser: any): UserModel => {
  return {
    id: externalUser.documentNumber,
    documentType: externalUser.documentType,
    names: externalUser.names,
    lastNames: externalUser.lastNames,
    personalPhone: externalUser.personalPhone,
    personalEmail: externalUser.personalEmail,
    username: externalUser.username,
    password: externalUser.password,
    roles: externalUser.roles.map((role: any) => RolAdapter(role)),
    state: externalUser.state,
    allowedRoutes: [
      PathNames.USERS,
      PathNames.VIEW_USER,
      PathNames.REGISTER_USER,
      PathNames.EDIT_USER,
      PathNames.ROLES,
      PathNames.CREATE_ROLE,
      PathNames.VIEW_ROLE,
      PathNames.EDIT_ROLE,
      PathNames.PERMISSIONS,
      PathNames.CREATE_PERMISSION,
      PathNames.VIEW_PERMISSION,
      PathNames.EDIT_PERMISSION,
      PathNames.BUSINESS,
      PathNames.CREATE_BUSINESS,
      PathNames.VIEW_BUSINESS,
      PathNames.EDIT_BUSINESS,
      PathNames.PLANS,
      PathNames.CREATE_PLAN,
      PathNames.VIEW_PLAN,
      PathNames.EDIT_PLAN,
      PathNames.ACTIVITY,
      PathNames.CREATE_ACTIVITY,
      PathNames.VIEW_ACTIVITY,
      PathNames.EDIT_ACTIVITY,
      PathNames.STATISTICS,
      PathNames.SETTINGS,
      PathNames.CLOSE_SESSION,
      PathNames.COMPONETS,
      PathNames.LOGIN,
      PathNames.NOT_FOUND,
    ],
  };
};
