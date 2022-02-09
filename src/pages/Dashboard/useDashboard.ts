import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../actions/usersActions";
import { useAppDispatch } from "../../hooks/redux";
import { IUser } from "../../models/IUser";
import { useUsersState } from "../../reducers/usersReducer";

const userCreationRoute = "/user_creation";
export const useDashboard = () => {
  const dispatch = useAppDispatch();
  const { users } = useUsersState();
  const navigate = useNavigate();

  const onAddUser = () => {
    navigate(userCreationRoute);
  };

  const onEditUser = (user: IUser) => {
    navigate(userCreationRoute, { state: user });
  };

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return { onAddUser, onEditUser, data: users };
};
