import { applyMiddleware, combineReducers, createStore, Dispatch } from "redux";
import usersReducers from "../reducers/usersReducer";
import thunk from "redux-thunk";
import loadingReducer from "../reducers/loadingReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = {
  usersReducers,
  loadingReducer,
};

const middlewares = [thunk];
export const store = createStore(
  combineReducers(reducers),
  composeWithDevTools(applyMiddleware(...middlewares))
);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = Dispatch<any>;
