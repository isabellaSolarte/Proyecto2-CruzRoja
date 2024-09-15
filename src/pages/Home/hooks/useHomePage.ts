import { useUserActions } from '../../../recoil';
import { availableMenuOptions, getAllowedUserRoutes } from '../../../core';
import { getMenuOptions } from '../../../utils';
import { MenuOption, UserModel } from '../../../models';
import { RouterModel } from '../../../models/SideMenuModels/RouteModel';
import { useNavigate } from 'react-router-dom';

const useHomePage = () => {
  const navigate = useNavigate();
  const user: UserModel | undefined = useUserActions().getLoggedUser();

  const allowedRoutes: RouterModel[] = getAllowedUserRoutes(user);
  const adaptedMenuOptions: MenuOption[] = getMenuOptions(allowedRoutes);
  const avalibleActions = adaptedMenuOptions.filter(option =>
    availableMenuOptions.includes(option.path),
  );

  const generateRandomColor = (): string => {
    const colors = [
      '#B88842',
      '#B842AF',
      '#65B842',
      '#B84442',
      '#4248B8',
      '#4D6344',
    ];

    return colors[Math.floor(Math.random() * colors.length)];
  };

  return {
    avalibleActions,
    user,
    generateRandomColor,
    navigate,
  };
};

export default useHomePage;
