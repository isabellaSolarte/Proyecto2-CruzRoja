import { useTranslation } from 'react-i18next';
import GroupsIcon from '@mui/icons-material/Groups';
import BusinessIcon from '@mui/icons-material/Business';
import { CompoentesPage, CreateRolePage, UsersPage } from '../../pages';
import { PathNames } from '../PathNames';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { RouterModel } from '../../models/SideMenuModels/RouteModel';
import RegisterUserPage from '../../pages/RegisterUser/RegisterUserPage';
import { RolesPage } from '../../pages/Roles';
import { ViewUserPage } from '../../pages/ViewUser';

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
      path: PathNames.BUSINESS,
      component: <h1>GESTIONAR EMPRESAS</h1>,
      title: t('menuOptions.business'),
      icon: <BusinessIcon />,
    },
    {
      path: PathNames.USERS,
      component: <UsersPage />,
      title: t('menuOptions.users'),
      icon: <GroupsIcon />,
    },
    {
      path: PathNames.REGISTER_USER,
      component: <RegisterUserPage />,
      title: 'REGISTRAR USUARIO',
    },
    {
      path: PathNames.VIEW_USER,
      component: <ViewUserPage />,
      title: 'VER USUARIO',
    },
    {
      path: PathNames.ROLES,
      component: <RolesPage />,
      title: t('menuOptions.roles'),
      icon: <AdminPanelSettingsIcon />,
    },
    {
      path: PathNames.PERMISSIONS,
      component: <h1>GESTIONAR PERMISOS</h1>,
      title: t('menuOptions.permissions'),
      icon: <VpnKeyIcon />,
    },
    {
      path: PathNames.PLANS,
      component: <h1>GESTIONAR PLANES</h1>,
      title: t('menuOptions.plans'),
      icon: <ViewInArIcon />,
    },
    {
      path: PathNames.ACTIVITY,
      component: <h1>GESTIONAR ACTIVIDAD</h1>,
      title: t('menuOptions.activities'),
      icon: <VolunteerActivismIcon />,
    },
    {
      path: PathNames.STATISTICS,
      component: <h1>ESTADÍSTICAS</h1>,
      title: t('menuOptions.statistics'),
      icon: <QueryStatsIcon />,
    },
    {
      path: PathNames.SETTINGS,
      component: <h1>CONFIGURACIÓN</h1>,
      title: t('menuOptions.settings'),
      icon: <SettingsIcon />,
    },
    {
      path: PathNames.CLOSE_SESSION,
      component: <h1>CERRAR SESIÓN</h1>,
      title: t('menuOptions.logout'),
      icon: <LogoutIcon />,
    },
    {
      path: PathNames.COMPONETS,
      component: <CompoentesPage />,
      title: 'COMPONENTES',
    },
    {
      path: PathNames.CREATE_ROLE,
      component: <CreateRolePage />,
      title: 'CREAR ROLES',
    },
    {
      path: PathNames.EDIT_ROLE,
      component: <CreateRolePage />,
      title: 'EDITAR ROL',
    }
  ];

  return routes;
};
