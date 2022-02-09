import { useLocation, useNavigate } from "react-router-dom";
import { IUser } from "../../models/IUser";
import * as Yup from "yup";

interface IUserCreation {
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
  const { state } = useLocation();
  const navigate = useNavigate();
  const isEditing = !!state;
  const title = isEditing ? "Edit User" : "Create User";

  const onSubmit = (values: IUserCreation) => {
    console.log(values);
  };

  const goBack = () => {
    navigate(-1);
  };

  return {
    isEditing,
    title,
    initialValues: (state as IUser) || initialValues,
    onSubmit,
    validationSchema,
    goBack,
  };
};
