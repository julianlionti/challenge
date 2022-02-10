import { IUser } from "../models/IUser";
import { IUserCreation } from "../pages/UserCreation/useUserCreation";
import { SortConfiguration } from "../providers/CustomTableProvider/useCustomTableProvider";
import { AppDispatch, RootState } from "../store/store";
import Config from "../utils/config";
import { makeRequest } from "../utils/makeRequest";
import { Action } from "./actions";

// const prefix = "user/";

const GET_USERS_FULLFIELD = `GET_USERS_FULLFIELD`;
const ADD_USER_FULLFIELD = `ADD_USER_FULLFIELD`;
const EDIT_USER_FULLFIELD = `EDIT_USER_FULLFIELD`;
const REMOVE_USER_FULLFIELD = `REMOVE_USER_FULLFIELD`;
const START_USER_ACTION = `START_USER_ACTION`;
const SORT_USER_ACTION = `SORT_USER_ACTION`;

type GetUsersFullfield = Action<typeof GET_USERS_FULLFIELD, IUser[]>;
export const getUsersFullfield = (users: IUser[]): GetUsersFullfield => ({
  type: GET_USERS_FULLFIELD,
  payload: users,
});

type AddUserAction = Action<typeof ADD_USER_FULLFIELD, IUser>;
export const addUserFullfield = (user: IUser): AddUserAction => ({
  type: ADD_USER_FULLFIELD,
  payload: user,
});

type EditUserAction = Action<typeof EDIT_USER_FULLFIELD, IUser>;
export const editUserFullfield = (user: IUser): EditUserAction => ({
  type: EDIT_USER_FULLFIELD,
  payload: user,
});

type RemoveUserAction = Action<typeof REMOVE_USER_FULLFIELD, IUser>;
export const removeUserFullfield = (user: IUser): RemoveUserAction => ({
  type: REMOVE_USER_FULLFIELD,
  payload: user,
});

type StartUserAction = Action<typeof START_USER_ACTION, boolean>;
export const startUserAction = (hasStarted: boolean): StartUserAction => ({
  type: START_USER_ACTION,
  payload: hasStarted,
});

type SortUserAction = Action<typeof SORT_USER_ACTION, SortConfiguration<IUser>>;
export const sortUserAction = (
  sortConfiguration: SortConfiguration<IUser>
): SortUserAction => ({
  type: SORT_USER_ACTION,
  payload: sortConfiguration,
});

export type UsersActions =
  | GetUsersFullfield
  | AddUserAction
  | RemoveUserAction
  | EditUserAction
  | StartUserAction
  | SortUserAction;

export const getUsers =
  () =>
  async (dispatch: AppDispatch, getState: () => RootState): Promise<any> => {
    const { usersReducers } = getState();
    if (usersReducers.users.length !== 0) return;

    const response = await makeRequest({ url: Config.BASE_URL });

    dispatch(getUsersFullfield(response));
  };

export const deleteUser = (user: IUser) => async (dispatch: AppDispatch) => {
  await makeRequest({
    url: `${Config.BASE_URL}/${user.id}`,
    method: "DELETE",
  });

  dispatch(removeUserFullfield(user));
};

export const addUser =
  (userCreation: IUserCreation) => async (dispatch: AppDispatch) => {
    const response = await makeRequest({
      url: Config.BASE_URL,
      method: "POST",
      data: userCreation,
    });
    dispatch(addUserFullfield(response));
  };

export const editUser =
  (userCreation: IUserCreation & { id: number }) =>
  async (dispatch: AppDispatch) => {
    const response = await makeRequest({
      url: `${Config.BASE_URL}/${userCreation.id}`,
      method: "PUT",
      data: userCreation,
    });
    dispatch(editUserFullfield(response));
  };
