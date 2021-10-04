import * as Actions from './actions';
import initialState from '../store/initialState';
import { ACTION } from './types';

export const UsersReducer = (state = initialState.users, action: ACTION) => {
  switch (action.type) {
    case Actions.LOGIN:
      return { ...state, ...action.payload };
    case Actions.LOGOUT:
      return { ...initialState.users };
    default:
      return state;
  }
};
