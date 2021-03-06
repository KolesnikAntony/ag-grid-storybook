import React, { createContext, useContext, useReducer } from 'react';
import { combineReducers } from './combine-reducers';
import { initialTabFilter, sliceTabFilter } from '../features/new-tab-feature/slices/filter-tab-slice';

const StoreContext = createContext({});

const initialState = {
  sliceTabFilter: initialTabFilter,
};
const reducers = {
  sliceTabFilter,
};

const rootReducer = combineReducers(reducers);

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  const store = React.useMemo(() => [state, dispatch], [state]);
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export const useStore = () => useContext(StoreContext);

export const useSelector = (func) => {
  const [state] = useStore();
  return func(state);
};

export const useDispatch = () => {
  const [, dispatch] = useStore();
  return dispatch;
};
