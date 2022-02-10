import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { changeTheme } from "../../actions/configurationActions";
import { useAppDispatch } from "../../hooks/redux";
import { useConfigurationState } from "../../reducers/configurationReducer";

export interface HeaderProps {}

export const useHeader = (props: HeaderProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { theme } = useConfigurationState();

  const canGoBack = pathname.includes("/user_creation");

  const toggleTheme = () => {
    dispatch(changeTheme(theme === "dark" ? "light" : "dark"));
  };

  const goBack = () => {
    navigate(-1);
  };

  return { goBack, canGoBack, theme, toggleTheme };
};
