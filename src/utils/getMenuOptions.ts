import { PathNames } from '../core';
import { MenuOption } from '../models';
import { RouterModel } from '../models/SideMenuModels/RouteModel';

const getMenuOptions = (routes: RouterModel[]): MenuOption[] => {
  return routes.map(route => {
    return {
      title: route.title,
      path: route.path as PathNames,
      icon: route.icon,
    };
  });
};

export default getMenuOptions;
