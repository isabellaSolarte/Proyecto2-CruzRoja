import React from 'react';
import { DrawerMenu } from '../Molecules';
import { MenuOption, UserModel } from '../../models';
import { getAllowedUserRoutes } from '../../core';
import { MainLayout } from '../Layouts';
import CustomAppBar from './CustomAppBar/CustomAppBar';
import { usuarioPruebas } from '../../App';
import { RouterModel } from '../../models/SideMenuModels/RouteModel';

interface AppLayoutProps {
  content: React.ReactNode;
}

const AppLayout = ({ content }: AppLayoutProps) => {
  const userTest: UserModel = usuarioPruebas;

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
