import { useLocation } from "react-router-dom";
import { IUser } from "../../models/IUser";

export const useUserCreation = () => {
  const { state } = useLocation();

  const isEditing = !!state;
  //   const {} = state as IUser;

  const title = isEditing ? "Edit User" : "Create User";

  return { isEditing, title };
};
