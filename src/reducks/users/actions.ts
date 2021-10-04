import { USER_STATE } from './types';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const loginAction = (userState: USER_STATE) => {
  return {
    type: 'LOGIN',
    payload: {
      uid: userState.users.uid,
      photoUrl: userState.users.photoUrl,
      username: userState.users.username,
    },
  };
};

export const logoutAction = () => {
  return {
    type: 'LOGOUT',
    payload: {
      uid: '',
      photoUrl: '',
      username: '',
    },
  };
};
