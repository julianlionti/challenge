import { Action } from './actions'

export const REMOVE_REQUEST_ACTION_TYPE = 'REMOVE_REQUEST_ACTION_TYPE'
export const SET_REQUEST_ACTION_TYPE = 'SET_REQUEST_ACTION_TYPE'

type RemoveRequestAcction = Action<typeof REMOVE_REQUEST_ACTION_TYPE, string>
export const removeRequest = (url: string): RemoveRequestAcction => ({
  type: REMOVE_REQUEST_ACTION_TYPE,
  payload: url,
})

type SetRequestAction = Action<typeof SET_REQUEST_ACTION_TYPE, string>
export const setRequest = (url: string): SetRequestAction => ({
  type: SET_REQUEST_ACTION_TYPE,
  payload: url,
})

export type LoadingActions = RemoveRequestAcction | SetRequestAction
