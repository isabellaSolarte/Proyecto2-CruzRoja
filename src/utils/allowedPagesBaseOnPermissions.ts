import { PermissionModel, RoleModel, UserModel } from '../models';

export const allowedPagesBaseOnPermissions = (
  usuario: UserModel | undefined | null,
  permisoId: number,
): boolean => {
  if (usuario === undefined || usuario === null) return false;

  console.log('usuario', usuario);
  const tienePermiso = usuario.roles.some((rol: RoleModel) =>
    rol.permissions.some(
      (permisoRol: PermissionModel) => permisoRol.id === permisoId,
    ),
  );
  return tienePermiso;
};
