import { useEffect } from "react";
import { getUsers } from "../../actions/usersActions";
import { useAppDispatch } from "../../hooks/redux";
import { useUsersState } from "../../reducers/usersReducer";

export const useDashboard = () => {
  const dispatch = useAppDispatch();
  const { users } = useUsersState();
  const onAddUser = () => {};

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return { onAddUser, data: users };
};
