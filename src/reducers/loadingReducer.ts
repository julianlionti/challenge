import { Reducer } from 'redux'
import { LoadingActions } from '../actions/loadingActions'
import { useAppSelector } from '../hooks/redux'

export interface ILoadingState {
  requests: string[]
}

const initialState: ILoadingState = {
  requests: [],
}

type LoadingReducer = Reducer<ILoadingState, LoadingActions>
const loadingReducer: LoadingReducer = (state = initialState, action) => {
  const url = action.payload
  const { requests } = state

  switch (action.type) {
    case 'SET_REQUEST_ACTION_TYPE': {
      if (requests.includes(url)) return state
      const finalRequests = [...requests, url]
      return { requests: finalRequests }
    }

    case 'REMOVE_REQUEST_ACTION_TYPE': {
      const finalRequest = requests.filter((req) => req !== url)
      return { requests: finalRequest }
    }
    default:
      return state
  }
}

export const useLoadingState = () =>
  useAppSelector(({ loadingReducer }) => loadingReducer)
export default loadingReducer
