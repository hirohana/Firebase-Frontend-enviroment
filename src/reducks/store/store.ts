import {
  combineReducers,
  createStore as reduxCreateStore,
  applyMiddleware,
} from 'redux';
// デプロイする際は下記のコードを消去する。
// それに伴って、composeWithDevTools(applyMiddleware(thunk))を
// applyMiddleware(thunk)に変更する。
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { UsersReducer } from '../users/reducers';

const createStore = () => {
  return reduxCreateStore(
    combineReducers({
      users: UsersReducer,
    }),
    composeWithDevTools(applyMiddleware(thunk)) // 左記を変更する。
  );
};

export default createStore;
