export interface Action<T = string, K = any> {
  type: T;
  payload: K;
}

export interface NoPayloadAction<T = string> {
  type: T;
}
