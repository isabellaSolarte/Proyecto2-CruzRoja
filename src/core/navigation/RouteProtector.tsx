import { UserModel } from '../../models/UserModel';
import { Navigate } from 'react-router-dom';
import { RouterModel } from '../../models/RouteModel';
import React from 'react';
import { AppLayout } from '../../components';
import { getAllowedUserRoutePaths } from './getAllowedUserRoutes';

interface RouteProtectorProps {
  route: RouterModel;
  component: React.ReactNode;
}

const RouteProtector = ({ route, component }: RouteProtectorProps) => {
  const userTest: UserModel = {
    id: 'id',
    name: 'User Test',
    email: '',
    role: {
      name: 'Admin',
      routes: ['/users/', '/business/'],
      permissions: [''],
    },
    password: '',
    avatar: '',
    status: '',
    created_at: '',
    updated_at: '',
  };
  const loggedUser: boolean = true;
  const allowedUserRoutes: string[] = getAllowedUserRoutePaths(userTest);

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!loggedUser) return <Navigate to="/login" />;

  if (!allowedUserRoutes.includes(route.path)) return <Navigate to="/404" />;

  return <AppLayout content={component} />;
};

export default RouteProtector;
