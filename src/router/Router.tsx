//import { Route, createBrowserRouter } from "react-router-dom"

import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { NavigationRoutes, PublicProtector, RouteProtector } from '../core/navigation';
import { RouterModel } from '../models/SideMenuModels/RouteModel';
import Error404 from '../pages/404/ErrorPage';
import { LandingPage, FuentesPage } from '../pages';
import { PathNames } from '../core';
import { AppLayout } from '../components';

const getRouteObject = (route: RouterModel): RouteObject => {
  const routeChildren = route.children && route.children.map(child => getRouteObject(child));
  return {
    path: route.path,
    element: <RouteProtector component={route.component} route={route} />,
    children: routeChildren,
  };
};

const Router = () => {
  const routes: RouterModel[] = NavigationRoutes();

  const routerObjects: RouteObject[] = routes.map(getRouteObject);
  routerObjects.push({
    path: PathNames.ASSESSMENT,
    element: <AppLayout content={<FuentesPage/>} />,
  });
  routerObjects.push({
    path: PathNames.LANDIN_PAGE,
    element: <LandingPage />,
  });
  routerObjects.push({
    path: '/login',
    element: <PublicProtector />,
  });
  routerObjects.push({
    path: '/404',
    element: <Error404 />,
  });

  return <RouterProvider router={createBrowserRouter(routerObjects)} />;
};

export default Router;
