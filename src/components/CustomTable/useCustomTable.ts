import { useMemo } from 'react'
import { SharedTableState } from '../../providers/CustomTableProvider/useCustomTableProvider'
import { HeaderType } from '../TableHeaderCell/useTableHeaderCell'

export interface CustomTableProps<T> extends SharedTableState<T> {
  rowKey: keyof T
  title: string
  onAdd?: () => void
  renderItem?: () => void
  children: JSX.Element[]
  emptyListLegend?: string
  height?: number
}

export const useCustomTable = <T>(props: CustomTableProps<T>) => {
  const { title, onAdd, children, rowKey, emptyListLegend, ...sharedCtx } =
    props
  const { onDelete, onEdit, loading } = sharedCtx

  const headers = useMemo(() => {
    const headersFromColumnTemplate = children.map(
      (e): HeaderType => ({ title: e.props.children, ...e.props })
    )
    if (onEdit) headersFromColumnTemplate.push({ title: 'Edit' })
    if (onDelete) headersFromColumnTemplate.push({ title: 'Delete' })
    return headersFromColumnTemplate
  }, [])

  return {
    onAdd,
    headers,
    sharedCtx,
    loading,
    ...props,
  }
}
