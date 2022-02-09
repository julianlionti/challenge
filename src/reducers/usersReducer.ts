import { UsersActions } from "../actions/usersActions";
import { useAppSelector } from "../hooks/redux";
import { IUser } from "../models/IUser";
import { Reducer } from "redux";

export interface IUsersState {
  users: IUser[];
}

const initialState: IUsersState = {
  users: [],
};

type UserReducer = Reducer<IUsersState, UsersActions>;
const usersReducer: UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS_FULLFIELD":
      return { users: action.payload };
    default:
      return state;
  }
};

export const useUsersState = () =>
  useAppSelector(({ usersReducers }) => usersReducers);
export default usersReducer;
