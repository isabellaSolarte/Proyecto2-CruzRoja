import { RouterModel } from '../../models';

export const NavigationRoutes = () => {
  const routes: RouterModel[] = [
    {
      path: '/*',
      component: <h1>404</h1>,
    },
    {
      path: '/404',
      component: <h1>404</h1>,
    },
    {
      path: '/users/',
      component: <h1>RUTA PADRE DE USUARIOS</h1>,
    },
    {
      path: '/users/list',
      component: <h1>LISTA DE USUARIOS</h1>,
    },
    {
      path: '/users/register',
      component: <h1>REGISTRO DE USUARIOS</h1>,
    },
    {
      path: '/users/edit/:id',
      component: <h1>EDICIÓN DE USUARIOS</h1>,
    },
    {
      path: '/users/view/:id',
      component: <h1>VER DETALLES DE USUARIO</h1>,
    },
  ];

  return routes;
};
