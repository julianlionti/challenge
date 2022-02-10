import { ThemeMode } from "../reducers/configurationReducer";
import { Action } from "./actions";

export const CHANGE_THEME = "CHANGE_THEME";

type ChangeThemeAction = Action<typeof CHANGE_THEME, ThemeMode>;
export const changeTheme = (theme: ThemeMode): ChangeThemeAction => ({
  type: CHANGE_THEME,
  payload: theme,
});

export type ConfigurationActions = ChangeThemeAction;
