import { UserModel } from '../../models/UserModel';
import { Navigate } from 'react-router-dom';
import { RouterModel } from '../../models/RouteModel';
import React from 'react';
import { AppLayout } from '../../components';
import { getAllowedUserRoutePaths } from './getAllowedUserRoutes';
import { PathNames } from '../PathNames';

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
      routes: [
        PathNames.USERS,
        PathNames.ROLES,
        PathNames.BUSINESS,
        PathNames.PERMISSIONS,
        PathNames.PLANS,
        PathNames.ACTIVITY,
        PathNames.STATISTICS,
        PathNames.CLOSE_SESSION,
      ],
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

  if (route.path === '/*') return <Navigate to="/users" />;

  if (!allowedUserRoutes.includes(route.path)) return <Navigate to="/404" />;

  return <AppLayout content={component} />;
};

export default RouteProtector;
