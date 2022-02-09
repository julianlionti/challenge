import { IUser } from "../models/IUser";
import { AppDispatch, RootState } from "../store/store";
import { makeRequest } from "../utils/makeRequest";
import { Action } from "./actions";

const GET_USERS_FULLFIELD = "GET_USERS_FULLFIELD";
const ADD_USER = "ADD_USER";

type GetUsersFullfield = Action<typeof GET_USERS_FULLFIELD, IUser[]>;
export const getUsersFullfield = (users: IUser[]): GetUsersFullfield => ({
  type: GET_USERS_FULLFIELD,
  payload: users,
});

type AddUserAction = Action<typeof ADD_USER, IUser>;
export const addUser = (user: IUser): AddUserAction => ({
  type: ADD_USER,
  payload: user,
});

export const getUsers =
  () =>
  async (dispatch: AppDispatch, getState: () => RootState): Promise<any> => {
    const { usersReducers } = getState();
    if (usersReducers.users.length !== 0) return;

    const response = await makeRequest({
      url: "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data",
    });

    dispatch(getUsersFullfield(response));
  };

export type UsersActions = GetUsersFullfield | AddUserAction;
