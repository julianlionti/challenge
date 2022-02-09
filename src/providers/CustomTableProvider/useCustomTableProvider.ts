import { createContext, useContext } from "react";

export interface SharedTableState<T> {
  data: T[];
  onEdit?: (row: T) => void;
  onDelete?: (row: T) => void;
}

export type CustomTableCtxState = SharedTableState<any>;
const initialCtxState: CustomTableCtxState = { data: [] };
export const CustomTableCtx = createContext(initialCtxState);

export const useCustomTableCtx = () => useContext(CustomTableCtx);
