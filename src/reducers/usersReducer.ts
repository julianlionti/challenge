import { UsersActions } from "../actions/usersActions";
import { useAppSelector } from "../hooks/redux";
import { IUser } from "../models/IUser";
import { Reducer } from "redux";
import { SortConfiguration } from "../providers/CustomTableProvider/useCustomTableProvider";

export interface IUsersState {
  users: IUser[];
  sortConfiguration: SortConfiguration<IUser>;
  actionAlreadyDone: boolean;
}

const initialState: IUsersState = {
  users: [],
  sortConfiguration: { username: "" },
  actionAlreadyDone: false,
};

type UserReducer = Reducer<IUsersState, UsersActions>;
const usersReducer: UserReducer = (state = initialState, action) => {
  const { users } = state;
  switch (action.type) {
    case "START_USER_ACTION":
      return { ...state, actionAlreadyDone: action.payload };
    case "GET_USERS_FULLFIELD":
      return { ...state, actionAlreadyDone: false, users: action.payload };
    case "ADD_USER_FULLFIELD": {
      const finalUsers = [action.payload, ...users];
      return { ...state, actionAlreadyDone: true, users: finalUsers };
    }
    case "EDIT_USER_FULLFIELD": {
      const { id } = action.payload;
      const finalUsers = users.map((user) => {
        if (user.id === id) {
          return { ...user, ...action.payload };
        }
        return user;
      });
      return { ...state, users: finalUsers, actionAlreadyDone: true };
    }
    case "REMOVE_USER_FULLFIELD": {
      const finalUsers = users.filter((user) => user.id !== action.payload.id);
      return { ...state, actionAlreadyDone: true, users: finalUsers };
    }
    case "SORT_USER_ACTION": {
      const { username } = action.payload;
      let sortedUsers = users;
      if (username === "asc" || username === "desc") {
        sortedUsers = users.sort((a, b) => {
          const aUsername = a.username || "";
          const bUserName = b.username || "";
          if (username === "asc") {
            return bUserName.localeCompare(aUsername);
          }
          return aUsername.localeCompare(bUserName);
        });
      } else {
        sortedUsers = users.sort((a, b) => a.id - b.id);
      }
      return {
        ...state,
        users: sortedUsers,
        sortConfiguration: action.payload,
      };
    }
    default:
      return state;
  }
};

export const useUsersState = () =>
  useAppSelector(({ usersReducers }) => usersReducers);
export default usersReducer;
