/* eslint-disable no-unused-vars */
export enum PathNames {
  HOME = '/home',

  USERS = '/users',
  VIEW_USER = '/users/view/:type/:id',
  REGISTER_USER = '/users/register/',
  EDIT_USER = '/users/edit/:type/:id',

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
  CREATE_CUSTOM_PLAN = '/plans/createCustomPlan',
  VIEW_PLAN = '/plans/view/:id',
  EDIT_PLAN = '/plans/edit/:id',

  ACTIVITY = '/activity',
  CREATE_ACTIVITY = '/activity/create',
  VIEW_ACTIVITY = '/activity/view/:id',
  EDIT_ACTIVITY = '/activity/edit/:id',

  CATEGORIES = '/categories',
  CREATE_CATEGORY = '/categories/create',
  VIEW_CATEGORY = '/categories/view/:id',
  EDIT_CATEGORY = '/categories/edit/:id',

  CALCULATOR = '/calculator',
  CALCULATOR_RESULTS = '/calculator/results',

  STATISTICS = '/statistics',

  ASSESSMENT = '/assessment',

  SETTINGS = '/settings',

  CLOSE_SESSION = '/close-session',

  COMPONETS = '/components',

  LOGIN = '/login',

  NOT_FOUND = '/404',

  LANDIN_PAGE = '/landingpage',

  ACTIONS = '/actions',
  CREATE_ACTIONS = '/actions/create',
  VIEW_ACTIONS = '/actions/view/:id',
  EDIT_ACTIONS = '/actions/edit/:id',

  SOURCES = '/sources',
  CREATE_SOURCES = '/sources/create',
  VIEW_SOURCES = '/sources/view/:id',
  EDIT_SOURCES = '/sources/edit/:id',

  POLLUTANTS = '/pollutants',
  CREATE_POLLUTANTS = '/pollutants/create',
  VIEW_POLLUTANTS = '/pollutants/view/:id',
  EDIT_POLLUTANTS = '/pollutants/edit/:id',
}
