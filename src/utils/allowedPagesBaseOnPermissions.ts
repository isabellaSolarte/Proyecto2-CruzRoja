import { PermissionModel, RoleModel, UserModel } from "../models";

export const allowedPagesBaseOnPermissions = (usuario: UserModel, permisoId: number): boolean => {
    const tienePermiso = usuario.roles.some((rol: RoleModel) =>
        rol.permissions.some((permisoRol: PermissionModel) => permisoRol.id === permisoId)
    );
    return tienePermiso;
}