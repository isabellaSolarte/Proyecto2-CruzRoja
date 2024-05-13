import { PathNames } from '../core';

const mapRoutes = new Map();
mapRoutes.set(100, PathNames.ROLES);
mapRoutes.set(101, PathNames.CREATE_ROLE);
mapRoutes.set(102, PathNames.EDIT_ROLE);
mapRoutes.set(103, PathNames.VIEW_ROLE);

mapRoutes.set(105, PathNames.PERMISSIONS);
mapRoutes.set(106, PathNames.CREATE_PERMISSION);
mapRoutes.set(107, PathNames.EDIT_PERMISSION);

mapRoutes.set(200, PathNames.USERS);
mapRoutes.set(201, PathNames.REGISTER_USER);
mapRoutes.set(202, PathNames.EDIT_USER);
mapRoutes.set(203, PathNames.VIEW_USER);

mapRoutes.set(300, PathNames.BUSINESS);
mapRoutes.set(301, PathNames.CREATE_BUSINESS);
mapRoutes.set(302, PathNames.EDIT_BUSINESS);
mapRoutes.set(303, PathNames.VIEW_BUSINESS);

mapRoutes.set(400, PathNames.CATEGORIES);
mapRoutes.set(401, PathNames.CREATE_CATEGORY);
mapRoutes.set(402, PathNames.EDIT_CATEGORY);
mapRoutes.set(403, PathNames.VIEW_CATEGORY);

export default mapRoutes;

/*   allowedRoutes: [
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
  ], */
