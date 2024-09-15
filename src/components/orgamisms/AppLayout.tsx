import React from 'react';
import { DrawerMenu } from '../Molecules';
import { MenuOption, UserModel } from '../../models';
import { availableMenuOptions, getAllowedUserRoutes } from '../../core';
import { MainLayout } from '../Layouts';
import CustomAppBar from './CustomAppBar/CustomAppBar';
import { RouterModel } from '../../models/SideMenuModels/RouteModel';
import { useUserActions } from '../../recoil';
import { Navigate } from 'react-router-dom';
import { getMenuOptions } from '../../utils';

interface AppLayoutProps {
  content: React.ReactNode;
}

const AppLayout = ({ content }: AppLayoutProps) => {
  const user: UserModel | undefined = useUserActions().getLoggedUser();

  if (!user) {
    return <Navigate to="/login" />;
  }

  const allowedRoutes: RouterModel[] = getAllowedUserRoutes(user);

  const adaptedMenuOptions: MenuOption[] = getMenuOptions(allowedRoutes);

  const drawerOptions = adaptedMenuOptions.filter(option =>
    availableMenuOptions.includes(option.path),
  );

  return (
    <MainLayout
      appBar={<CustomAppBar />}
      content={content}
      navigationMenu={<DrawerMenu options={drawerOptions} />}
    />
  );
};

export default AppLayout;
