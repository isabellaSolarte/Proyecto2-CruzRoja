export enum PathNames {
  USERS = '/users',
  VIEW_USER = '/users/view/:id',
  REGISTER_USER = '/users/register',
  EDIT_USER = '/users/edit/:id',

  ROLES = '/roles',
  CREATE_ROLE = '/roles/create',
  VIEW_ROLE = '/roles/view/:id',
  EDIT_ROLE = '/roles/edit/:id',

  PERMISSIONS = '/permissions',
  CREATE_PERMISSION = '/permissions/create',
  VIEW_PERMISSION = '/permissions/view/:id',
  EDIT_PERMISSION = '/permissions/edit/:id',

  BUSINESS = '/business',
  CREATE_BUSINESS = '/business/create',
  VIEW_BUSINESS = '/business/view/:id',
  EDIT_BUSINESS = '/business/edit/:id',

  PLANS = '/plans',
  CREATE_PLAN = '/plans/create',
  VIEW_PLAN = '/plans/view/:id',
  EDIT_PLAN = '/plans/edit/:id',

  ACTIVITY = '/activity',
  CREATE_ACTIVITY = '/activity/create',
  VIEW_ACTIVITY = '/activity/view/:id',
  EDIT_ACTIVITY = '/activity/edit/:id',

  STATISTICS = '/statistics',

  SETTINGS = '/settings',

  CLOSE_SESSION = '/close-session',
}
