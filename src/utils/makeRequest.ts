import axios, { AxiosRequestConfig, AxiosError } from "axios";
import { Store } from "redux";
import { removeRequest, setRequest } from "../actions/loadingActions";

let store: Store;
export const injectStore = (_store: Store) => {
  store = _store;
};

const axiosInstance = axios.create({});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MakeRequestFunc = <T = any>(config: AxiosRequestConfig) => Promise<T>;
export const makeRequest: MakeRequestFunc = async (config) => {
  if (!store) throw Error("Store must be injected");
  if (!config.url) throw Error("url must be set on request");
  const { url } = config;
  const { dispatch } = store;
  dispatch(setRequest(url));
  if (!config.method) {
    config.method = "GET";
  }

  try {
    const { data } = await axiosInstance(config);
    dispatch(removeRequest(url));
    return data;
  } catch (err) {
    const axiosError = err as AxiosError;
    console.log(axiosError);
    dispatch(removeRequest(url));
  }
};
