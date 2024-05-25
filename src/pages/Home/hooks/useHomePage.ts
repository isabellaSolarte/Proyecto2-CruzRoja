import { useUserActions } from '../../../recoil';
import { availableMenuOptions, getAllowedUserRoutes } from '../../../core';
import { getMenuOptions } from '../../../utils';
import { MenuOption, UserModel } from '../../../models';
import { RouterModel } from '../../../models/SideMenuModels/RouteModel';

const useHomePage = () => {
  const user: UserModel | undefined = useUserActions().getLoggedUser();

  const allowedRoutes: RouterModel[] = getAllowedUserRoutes(user);
  const adaptedMenuOptions: MenuOption[] = getMenuOptions(allowedRoutes);
  const avalibleActions = adaptedMenuOptions.filter(option =>
    availableMenuOptions.includes(option.path),
  );

  const generateRandomColor = () => {};

  return {
    avalibleActions,
    user,
  };
};

export default useHomePage;
