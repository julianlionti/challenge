import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  deleteUser,
  getUsers,
  sortUserAction,
  startUserAction,
} from "../../actions/usersActions";
import { useAppDispatch } from "../../hooks/redux";
import { IUser } from "../../models/IUser";
import { SortConfiguration } from "../../providers/CustomTableProvider/useCustomTableProvider";
import { useLoadingState } from "../../reducers/loadingReducer";
import { useUsersState } from "../../reducers/usersReducer";
import Config from "../../utils/config";

const userCreationRoute = "/user_creation";
export const useDashboard = () => {
  const userRowRef = useRef<IUser | null>(null);
  const dispatch = useAppDispatch();
  const { users, actionAlreadyDone, sortConfiguration } = useUsersState();
  const { requests } = useLoadingState();
  const navigate = useNavigate();
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);

  const isLoadingGet = requests.includes(`GET:${Config.BASE_URL}`);
  const isLoadingDelete = requests.some((req) =>
    req.includes(`DELETE:${Config.BASE_URL}`)
  );

  const onAddUser = () => {
    navigate(userCreationRoute);
  };

  const onEditUser = (user: IUser) => {
    navigate(userCreationRoute, { state: user });
  };

  const onDeleteUser = (user: IUser) => {
    toggleDeleteConfirmation();
    userRowRef.current = user;
  };

  const toggleDeleteConfirmation = () => {
    setDeleteConfirmation((delConfirmation) => {
      const nextVal = !delConfirmation;
      if (!nextVal) {
        setTimeout(() => {
          userRowRef.current = null;
        }, 500);
      }
      return nextVal;
    });
  };

  const confirmDelete = () => {
    if (userRowRef.current) dispatch(deleteUser(userRowRef.current));
  };

  const onSortUsers = (conf: SortConfiguration<IUser>) => {
    dispatch(sortUserAction(conf));
  };

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  useEffect(() => {
    if (actionAlreadyDone) {
      setDeleteConfirmation(false);
      dispatch(startUserAction(false));
    }
  }, [actionAlreadyDone]);

  return {
    onAddUser,
    onEditUser,
    onDeleteUser,
    data: users,
    toggleDeleteConfirmation,
    showDeleteConfirmation: deleteConfirmation || isLoadingDelete,
    userToBeDelete: userRowRef.current,
    confirmDelete,
    isLoadingGet,
    isLoadingDelete,
    onSortUsers,
    sortConfiguration,
  };
};
