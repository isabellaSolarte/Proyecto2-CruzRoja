export interface LoggedUser {
  id: number;
  username: string;
  roles: string[];
  allowedRoutes: string[];
}
