import React from 'react';
import { DrawerMenu } from '../Molecules';
import { MenuOption, RouterModel, UserModel } from '../../models';
import { PathNames, getAllowedUserRoutes } from '../../core';
import { MainLayout } from '../Layouts';
import CustomAppBar from './CustomAppBar/CustomAppBar';

interface AppLayoutProps {
  content: React.ReactNode;
}

const AppLayout = ({ content }: AppLayoutProps) => {
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

  const allowedRoutes: RouterModel[] = getAllowedUserRoutes(userTest);

  const adaptRoutesToMenuOptions = (routes: RouterModel[]): MenuOption[] => {
    return routes.map(route => {
      return {
        title: route.title,
        path: route.path,
        icon: route.icon,
      };
    });
  };

  const adaptedMenuOptions: MenuOption[] = adaptRoutesToMenuOptions(allowedRoutes);

  return (
    <MainLayout
      appBar={<CustomAppBar />}
      content={content}
      navigationMenu={<DrawerMenu options={adaptedMenuOptions} />}
    />
  );
};

export default AppLayout;
