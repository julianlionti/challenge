export interface Action<T = string, K = any> {
  type: T;
  payload: K;
}
