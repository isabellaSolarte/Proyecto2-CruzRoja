/**
 * Get allowed routes for the current logged user
 * @param currentUser
 * @returns allowedRoutes
 */

import { UserModel } from '../../models/UserModel';
import { NavigationRoutes } from './NavigationRoutes';
import { RouterModel } from '../../models/RouteModel';

/**
 * Get all routes paths from the parent route and its children
 * @param parentRoute
 * @returns all routes paths from an specific route
 */
const getRoutePaths = (parentRoute: RouterModel): string[] => {
  const allRoutePaths: string[] = [parentRoute.path];
  if (parentRoute.children) {
    parentRoute.children.forEach(childRoute =>
      allRoutePaths.push(`${parentRoute.path}${childRoute.path}`),
    );
  }
  return allRoutePaths;
};

/**
 * Get all routes paths from the routes list and its children
 * @returns all routes paths
 */
const getAllRoutePaths = (): string[] => {
  const routerPathList: string[] = [];
  const allRoutes: RouterModel[] = NavigationRoutes();

  for (const route of allRoutes) routerPathList.push(...getRoutePaths(route));

  return routerPathList;
};

/**
 * Get allowed routes for the current logged user based on its role
 * @param currentUser
 * @returns allowedRoutes
 */
const getAllowedUserRoutes = (currentUser: UserModel) => {
  const routerPathList: string[] = getAllRoutePaths();

  const userRoutes: string[] = currentUser.role.routes;

  const allowedRoutes: string[] = userRoutes.filter(route => routerPathList.includes(route));

  return allowedRoutes;
};

export default getAllowedUserRoutes;
