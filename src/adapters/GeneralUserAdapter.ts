/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserModel } from '../models';
import { RolAdapter } from './RoleAdapter';
import mapRoutes from '../utils/routeMapping';
import { PathNames } from '../core';

export const GeneralUserAdapter = (externalUser: any): UserModel => {
  const allowedRoutes: any[] = [
    PathNames.HOME,
    PathNames.CALCULATOR,
    PathNames.CALCULATOR_RESULTS,
  ];

  externalUser.roles.forEach((rol: any) => {
    rol.permissions.forEach((permiso: any) => {
      // Verifica si el ID del permiso está mapeado en el map
      if (mapRoutes.has(permiso.idPermission)) {
        const mappedPath = mapRoutes.get(permiso.idPermission);
        if (Array.isArray(mappedPath)) {
          mappedPath.map(path => {
            if (!allowedRoutes.includes(path)) {
              allowedRoutes.push(path);
            }
          });
        } else if (!allowedRoutes.includes(mappedPath)) {
          // Comprueba si la ruta ya está en el array para evitar duplicados
          // Agrega la ruta al array de rutas permitidas
          allowedRoutes.push(mappedPath);
        }
      }
    });
  });

  console.log(allowedRoutes);

  return {
    id: externalUser.documentNumber,
    documentType: externalUser.documentType,
    names: externalUser.names,
    lastNames: externalUser.lastNames,
    personalPhone: externalUser.personalPhone,
    personalEmail: externalUser.personalEmail,
    username: externalUser.username,
    password: externalUser.password,
    roles: externalUser.roles.map((role: any) => RolAdapter(role)),
    state: externalUser.state,
    allowedRoutes: allowedRoutes,
  };
};
