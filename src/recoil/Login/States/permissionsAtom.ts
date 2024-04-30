import { atom } from 'recoil';
import { PermissionModel } from '../../../models';

type permisionsName = Pick<PermissionModel, 'name'>;

const permissionsAtom = atom<Set<permisionsName>>({
  key: 'permissionsAtom',
  default: new Set<permisionsName>([]),
});

export default permissionsAtom;
