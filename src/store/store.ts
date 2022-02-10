import { applyMiddleware, combineReducers, createStore, Dispatch } from "redux";
import usersReducers from "../reducers/usersReducer";
import thunk from "redux-thunk";
import loadingReducer from "../reducers/loadingReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import configurationReducer from "../reducers/configurationReducer";
import { persistStore } from "redux-persist";

const reducers = {
  usersReducers,
  loadingReducer,
  configurationReducer,
};

const middlewares = [thunk];
export const store = createStore(
  combineReducers(reducers),
  composeWithDevTools(applyMiddleware(...middlewares))
);
export const persistor = persistStore(store as any);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = Dispatch<any>;
