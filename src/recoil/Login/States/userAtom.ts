import { atom } from 'recoil';
import { UserModel } from '../../../models';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'user',
  storage: sessionStorage,
  converter: JSON,
});

const userAtom = atom<UserModel | undefined>({
  key: 'userAtom',
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

export default userAtom;
