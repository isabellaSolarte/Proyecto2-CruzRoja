import { Navigate } from 'react-router-dom';
import { RouterModel } from '../../models/SideMenuModels/RouteModel';
import React from 'react';
import { AppLayout } from '../../components';
import { getAllowedUserRoutePaths } from './getAllowedUserRoutes';
import { usuarioPruebas } from '../../App';
import { UserModel } from '../../models/UserModels/UserModel';

interface RouteProtectorProps {
  route: RouterModel;
  component: React.ReactNode;
}

const RouteProtector = ({ route, component }: RouteProtectorProps) => {
  const userTest: UserModel = usuarioPruebas;
  const loggedUser: boolean = true;
  const allowedUserRoutes: string[] = getAllowedUserRoutePaths(userTest);

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!loggedUser) return <Navigate to="/login" />;

  if (route.path === '/*') return <Navigate to="/users" />;

  if (!allowedUserRoutes.includes(route.path)) return <Navigate to="/404" />;

  return <AppLayout content={component} />;
};

export default RouteProtector;
