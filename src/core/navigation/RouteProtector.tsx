import { UserModel } from '../../models/UserModel';
import { Navigate } from 'react-router-dom';
import { RouterModel } from '../../models/RouteModel';
import getAllowedUserRoutes from './getAllowedUserRoutes';
import { Container } from '@mui/material';
import React from 'react';

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
      routes: ['/*', '/users/list', '/users/', '/users/register'],
      permissions: [''],
    },
    password: '',
    avatar: '',
    status: '',
    created_at: '',
    updated_at: '',
  };
  const loggedUser: boolean = true;
  const allowedUserRoutes: string[] = getAllowedUserRoutes(userTest);
  console.log('current', route);

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!loggedUser) return <Navigate to="/login" />;

  if (!allowedUserRoutes.includes(route.path)) return <Navigate to="/404" />;

  return <Container>{component}</Container>;
};

export default RouteProtector;
