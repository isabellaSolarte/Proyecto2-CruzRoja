import { atom } from 'recoil';
import { UserModel } from '../../../models';

const userAtom = atom<UserModel | undefined>({
  key: 'userAtom',
  default: undefined,
  effects_UNSTABLE: [
    ({ onSet }) => {
      onSet(newID => {
        console.debug('Current user ID:', newID);
      });
    },
  ],
});

export default userAtom;
