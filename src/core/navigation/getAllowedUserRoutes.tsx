/**
 * Get allowed routes for the current logged user
 * @param currentUser
 * @returns allowedRoutes
 */

import { UserModel } from '../../models/UserModel';
import { NavigationRoutes } from './NavigationRoutes';
import { RouterModel } from '../../models/SideMenuModels/RouteModel';

/**
 * Get all routes from the parent route and its children
 * @param parentRoute
 * @returns all routes paths from an specific route
 */
const getChildrenRoutes = (parentRoute: RouterModel): RouterModel[] => {
  const allRoutePaths: RouterModel[] = [parentRoute];
  if (parentRoute.children) {
    parentRoute.children.forEach(childRoute => allRoutePaths.push(childRoute));
  }
  return allRoutePaths;
};

/**
 * Get all routes paths from the existing routes
 * make just one array with all the children and parents in it
 * so intesad of get this [ route: {children: [route1, route2]}]
 * you will get [route, route1, route2]
 * @returns all routes paths
 */
const getAllRoutes = (): RouterModel[] => {
  const routerList: RouterModel[] = [];
  const allRoutes: RouterModel[] = NavigationRoutes();

  for (const route of allRoutes)
    getChildrenRoutes(route).forEach(children => routerList.push(children));

  return routerList;
};

/**
 * Get allowed route paths for the current logged user based on its role
 * @param currentUser
 * @returns allowedRoutePaths string list paths for the current logged user
 */
export const getAllowedUserRoutePaths = (currentUser: UserModel): string[] => {
  const routerPathList: string[] = getAllRoutes().map(route => route.path);

  const userRoutes: string[] = currentUser.role.routes;

  const allowedRoutes: string[] = userRoutes.filter(route => routerPathList.includes(route));

  return allowedRoutes;
};

/**
 * Get allowed routes for the current logged user
 * @param currentUser
 * @returns allowedRoutes RouterModel list for the current logged user
 */
export const getAllowedUserRoutes = (currentUser: UserModel): RouterModel[] => {
  const allRoutes: RouterModel[] = getAllRoutes();
  const userRoutes: string[] = currentUser.role.routes;

  const allowedRoutes: RouterModel[] = allRoutes.filter(route => userRoutes.includes(route.path));

  return allowedRoutes;
};
