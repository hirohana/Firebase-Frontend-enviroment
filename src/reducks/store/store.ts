import { combineReducers, createStore as ReduxCreateStore } from 'redux';
import { UsersReducer } from '../users/reducers';

const createStore = () => {
  return ReduxCreateStore(
    combineReducers({
      users: UsersReducer,
    })
  );
};

export default createStore;
