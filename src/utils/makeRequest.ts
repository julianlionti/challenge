import axios, { AxiosRequestConfig } from 'axios'
import { Store } from 'redux'
import { removeRequest, setRequest } from '../actions/loadingActions'

let store: Store
export const injectStore = (_store: Store<any, any>) => {
  store = _store
}

const axiosInstance = axios.create({})

type MakeRequestFunc = <T = any>(config: AxiosRequestConfig) => Promise<T>
export const makeRequest: MakeRequestFunc = async (config) => {
  if (!store) throw Error('Store must be injected')
  if (!config.url) throw Error('url must be set on request')
  const { url } = config
  const { dispatch } = store
  const finalMethod = config.method || 'GET'
  const finalUrlKey = `${finalMethod}:${url}`

  dispatch(setRequest(finalUrlKey))
  config.method = finalMethod

  const fakeLoading = new Promise((resolve) => setTimeout(resolve, 1000))
  await fakeLoading

  if (finalMethod === 'PUT') {
    dispatch(removeRequest(finalUrlKey))
    return config.data
  }

  try {
    const { data } = await axiosInstance(config)
    dispatch(removeRequest(finalUrlKey))
    return data
  } catch (err) {
    dispatch(removeRequest(finalUrlKey))
  }
}
