import { atom } from 'recoil';
import { LoggedUser } from '../../../models';

const userAtom = atom<LoggedUser | undefined>({
  key: 'userAtom',
  default: undefined,
  effects: [
    ({ onSet }) => {
      onSet(newID => {
        console.debug('Current user ID:', newID);
      });
    },
  ],
});

export default userAtom;
