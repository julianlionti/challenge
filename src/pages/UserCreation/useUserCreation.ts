import { useLocation, useNavigate } from "react-router-dom";
import { IUser } from "../../models/IUser";
import * as Yup from "yup";
import { useAppDispatch } from "../../hooks/redux";
import { addUser, editUser, startUserAction } from "../../actions/usersActions";
import { useLoadingState } from "../../reducers/loadingReducer";
import Config from "../../utils/config";
import { useUsersState } from "../../reducers/usersReducer";
import { useEffect } from "react";

export interface IUserCreation {
  name: string;
  email: string;
}

const initialValues: IUserCreation = {
  name: "",
  email: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
});

export const useUserCreation = () => {
  const dispatch = useAppDispatch();
  const { state } = useLocation();
  const navigate = useNavigate();
  const { actionAlreadyDone } = useUsersState();
  const { requests } = useLoadingState();
  const userRow = state as IUser | undefined;
  const isEditing = !!userRow;
  const title = isEditing ? "Edit User" : "Create User";
  const isLoading = requests.some(
    (req) =>
      req.includes(`POST:${Config.BASE_URL}`) ||
      req.includes(`PUT:${Config.BASE_URL}`)
  );

  const onSubmit = (values: IUserCreation) => {
    dispatch(
      isEditing ? editUser({ ...values, id: userRow.id }) : addUser(values)
    );
  };

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (actionAlreadyDone) {
      navigate(-1);
      dispatch(startUserAction(false));
    }
  }, [actionAlreadyDone]);

  return {
    isEditing,
    title,
    initialValues: userRow || initialValues,
    onSubmit,
    validationSchema,
    goBack,
    isLoading,
  };
};
