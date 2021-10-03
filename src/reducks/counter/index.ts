import { combineReducers } from 'redux';

export interface StoreState {
  test: number;
}

export const reducers = combineReducers<StoreState>({
  test: () => 1,
});
