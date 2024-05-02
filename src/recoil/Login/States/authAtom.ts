import { atom } from 'recoil';
import { LoggedUser } from '../../../models';

const authAtom = atom<LoggedUser | undefined>({
  key: 'authAtom',
  default: undefined,
  effects: [
    ({ onSet }) => {
      onSet(newID => {
        console.debug('Current user ID:', newID);
      });
    },
  ],
});

export default authAtom;
