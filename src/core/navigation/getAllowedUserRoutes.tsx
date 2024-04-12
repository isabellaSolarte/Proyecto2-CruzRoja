/**
 * Get allowed routes for the current logged user
 * @param currentUser
 * @returns allowedRoutes
 */

import { UserModel } from '../../models/UserModel';
import { NavigationRoutes } from './NavigationRoutes';

const getAllowedUserRoutes = (currentUser: UserModel) => {
  const routPathList: string[] = NavigationRoutes().map(route => route.path);

  const userRoutes: string[] = currentUser.role.routes;

  const allowedRoutes: string[] = userRoutes.filter(route => routPathList.includes(route));

  return allowedRoutes;
};

export default getAllowedUserRoutes;
