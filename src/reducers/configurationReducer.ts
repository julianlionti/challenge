import { useAppSelector } from '../hooks/redux'
import { Reducer } from 'redux'
import { ConfigurationActions } from '../actions/configurationActions'
import persistReducer from 'redux-persist/es/persistReducer'
import storage from 'redux-persist/lib/storage'

export type ThemeMode = 'dark' | 'light'
export interface IConfigurationState {
  theme: ThemeMode
}

const initialState: IConfigurationState = {
  theme: 'light',
}

type ConfigurationReducer = Reducer<IConfigurationState, ConfigurationActions>
const reducer: ConfigurationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      return { theme: action.payload }
    default:
      return state
  }
}

const configurationReducer = persistReducer(
  { key: 'configuration', storage },
  reducer
)

export const useConfigurationState = () =>
  useAppSelector(({ configurationReducer }) => configurationReducer)
export default configurationReducer
