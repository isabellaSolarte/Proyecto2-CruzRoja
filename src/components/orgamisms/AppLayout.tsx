import React from 'react';
import { DrawerMenu } from '../Molecules';
import { MenuOption, UserModel } from '../../models';
import { PathNames, getAllowedUserRoutes } from '../../core';
import { MainLayout } from '../Layouts';
import CustomAppBar from './CustomAppBar/CustomAppBar';
import { RouterModel } from '../../models/SideMenuModels/RouteModel';
import { useUserActions } from '../../recoil';
import { Navigate } from 'react-router-dom';

interface AppLayoutProps {
  content: React.ReactNode;
}

const AppLayout = ({ content }: AppLayoutProps) => {
  const user: UserModel | undefined = useUserActions().getLoggedUser();

  if (!user) {
    return <Navigate to="/login" />;
  }

  const allowedRoutes: RouterModel[] = getAllowedUserRoutes(user);

  const adaptRoutesToMenuOptions = (routes: RouterModel[]): MenuOption[] => {
    return routes.map(route => {
      return {
        title: route.title,
        path: route.path as PathNames,
        icon: route.icon,
      };
    });
  };

  const adaptedMenuOptions: MenuOption[] = adaptRoutesToMenuOptions(allowedRoutes);

  return (
    <>
      <MainLayout
        appBar={<CustomAppBar />}
        content={content}
        navigationMenu={<DrawerMenu options={adaptedMenuOptions} />}
      />
    </>
  );
};

export default AppLayout;
