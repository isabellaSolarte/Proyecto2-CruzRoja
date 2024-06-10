/* eslint-disable @typescript-eslint/no-unsafe-enum-comparison */
import { Navigate } from 'react-router-dom';
import { RouterModel } from '../../models/SideMenuModels/RouteModel';
import React from 'react';
import { AppLayout } from '../../components';
import { getAllowedUserRoutePaths } from './getAllowedUserRoutes';
import { UserModel } from '../../models/UserModels/UserModel';
import { useUserActions } from '../../recoil';
import { PathNames } from '../PathNames';
import { LandingPage } from '../../pages';

interface RouteProtectorProps {
  route: RouterModel;
  component: React.ReactNode;
}

const RouteProtector = ({ route, component }: RouteProtectorProps) => {
  const user: UserModel | undefined = useUserActions().getLoggedUser();
  if (!user) return <Navigate to={PathNames.LANDIN_PAGE} />;

  const allowedUserRoutes: string[] = getAllowedUserRoutePaths(user);

  if (route.path === '/*') return <Navigate to={PathNames.NOT_FOUND} />;

  if (route.path === PathNames.LANDIN_PAGE) return <LandingPage />;

  if (route.path === PathNames.LOGIN) return <Navigate to={PathNames.USERS} />;

  if (!allowedUserRoutes.includes(route.path)) return <Navigate to="/404" />;

  return <AppLayout content={component} />;
};

export default RouteProtector;
