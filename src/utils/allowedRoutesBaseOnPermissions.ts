import { PathNames } from "../core";

export const allowedRoutesBaseOnPermissions = (): <PathNames>[] => {
    const allowedRoutes: PathNames[] = [];

    
    allowedRoutes.push(PathNames.USERS);

    


    return allowedRoutes;
}