//import { Route, createBrowserRouter } from "react-router-dom"

import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { NavigationRoutes, RouteProtector } from '../core/navigation';
import { RouterModel } from '../models';

const Router = () => {
  const routes: RouterModel[] = NavigationRoutes();

  const routerObjects: RouteObject[] = routes.map(route => {
    return {
      path: route.path,
      element: <RouteProtector component={route.component} route={route} />,
    };
  });

  return <RouterProvider router={createBrowserRouter(routerObjects)} />;
};

export default Router;
