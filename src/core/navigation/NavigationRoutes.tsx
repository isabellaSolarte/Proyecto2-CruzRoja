import { useTranslation } from 'react-i18next';
import { RouterModel } from '../../models';
import GroupsIcon from '@mui/icons-material/Groups';
import BusinessIcon from '@mui/icons-material/Business';
import { CreateRolePage } from '../../pages/CreateRole';

export const NavigationRoutes = () => {
  const { t } = useTranslation('commons');

  const routes: RouterModel[] = [
    {
      path: '/*',
      component: <h1>404</h1>,
      title: '404',
    },
    {
      path: '/404',
      component: <h1>404</h1>,
      title: '404',
    },
    {
      path: '/users/',
      component: <CreateRolePage />,
      title: t('menuOptions.users'),
      icon: <GroupsIcon />,
    },
    {
      path: '/business/',
      component: <h1>GESTIONAR EMPRESAS</h1>,
      title: t('menuOptions.business'),
      icon: <BusinessIcon />,
    },
  ];

  return routes;
};
