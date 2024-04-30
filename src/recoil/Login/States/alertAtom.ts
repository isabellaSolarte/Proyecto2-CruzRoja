import { atom } from 'recoil';

const alertAtom = atom<string | null>({
  key: 'alert',
  default: null,
});

export default alertAtom;
