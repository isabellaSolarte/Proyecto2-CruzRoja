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
import { RouterModel } from '../../models/SideMenuModels/RouteModel';
import RegisterUserPage from '../../pages/RegisterUser/RegisterUserPage';
import { RolesPage } from '../../pages/Roles';
import { ViewUserPage } from '../../pages/ViewUser';
import EditUserPage from '../../pages/EditUser/EditUserPage';
import { Navigate } from 'react-router-dom';
import ClassIcon from '@mui/icons-material/Class';
import CategoriesList from '../../pages/Categories/ListCategoriesPage';
import { CreateCategoryPage } from '../../pages/CreateCategory';
import CalculateIcon from '@mui/icons-material/Calculate';
import CalculatorPage from '../../pages/Calculator/CalculatorPage';
import { CalculatorFormProvider } from '../../contexts/CalculatorForm';

export const NavigationRoutes = () => {
  const { t } = useTranslation('commons');

  const routes: RouterModel[] = [
    {
      path: '/*',
      component: <Navigate to={PathNames.NOT_FOUND} />,
      title: t('menuOptions.home'),
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
      path: PathNames.CATEGORIES,
      component: <CategoriesList />,
      title: t('menuOptions.categories'),
      icon: <ClassIcon />,
    },
    {
      path: PathNames.REGISTER_USER,
      component: <RegisterUserPage />,
      title: 'REGISTRAR USUARIO',
    },
    {
      path: PathNames.VIEW_USER,
      component: <ViewUserPage />,
      title: t('menuOptions.userView'),
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
      path: PathNames.COMPONETS,
      component: <CompoentesPage />,
      title: 'COMPONENTES',
    },
    {
      path: PathNames.CREATE_ROLE,
      component: <CreateRolePage />,
      title: t('menuOptions.createRoles'),
    },
    {
      path: PathNames.EDIT_ROLE,
      component: <CreateRolePage />,
      title: t('menuOptions.editRoles'),
    },
    {
      path: PathNames.EDIT_USER,
      component: <EditUserPage />,
      title: t('menuOptions.editUser'),
    },
    {
      path: PathNames.CREATE_CATEGORY,
      component: <CreateCategoryPage />,
      title: t('menuOptions.createCategory'),
    },
    {
      path: PathNames.EDIT_CATEGORY,
      component: <CreateCategoryPage />,
      title: t('menuOptions.editCategory'),
    },
    {
      path: PathNames.CALCULATOR,
      component: (
        <CalculatorFormProvider>
          <CalculatorPage />
        </CalculatorFormProvider>
      ),
      title: t('menuOptions.calculator'),
      icon: <CalculateIcon />,
    },
  ];

  return routes;
};
