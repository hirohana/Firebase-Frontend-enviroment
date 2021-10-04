import {
  combineReducers,
  createStore as reduxCreateStore,
  applyMiddleware,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { UsersReducer } from '../users/reducers';

const createStore = () => {
  return reduxCreateStore(
    combineReducers({
      users: UsersReducer,
    }),
    composeWithDevTools(applyMiddleware(thunk))
  );
};

export default createStore;
