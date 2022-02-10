import { createContext, useContext } from 'react'

export type SortType = 'asc' | 'desc' | ''
export type SortConfiguration<T> = Partial<Record<keyof T, SortType>>
export interface SharedTableState<T> {
  data: T[]
  onSort?: (actualSort: SortConfiguration<T>) => void
  onEdit?: (row: T) => void
  onDelete?: (row: T) => void
  loading?: boolean
  sortConfiguration?: SortConfiguration<T>
}

export type CustomTableCtxState = SharedTableState<any>
const initialCtxState: CustomTableCtxState = {
  data: [],
}
export const CustomTableCtx = createContext(initialCtxState)

export const useCustomTableCtx = () => useContext(CustomTableCtx)
