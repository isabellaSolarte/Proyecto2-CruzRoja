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
      path: '/home',
      component: <h1>Home</h1>,
    },
    {
      path: '/about',
      component: <h1>About</h1>,
    },
    {
      path: '/contact',
      component: <h1>Contact</h1>,
    },
    {
      path: '/users',
      component: <h1>Login</h1>,
    },
    {
      path: '/bussines',
      component: <h1>Register</h1>,
    },
  ];

  return routes;
};
