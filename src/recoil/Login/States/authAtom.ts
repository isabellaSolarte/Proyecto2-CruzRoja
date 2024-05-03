import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'token',
  storage: sessionStorage,
  converter: JSON,
});

const authAtom = atom<string | undefined>({
  key: 'authAtom',
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

export default authAtom;
