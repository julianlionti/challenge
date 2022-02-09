import { useMemo } from "react";
import { SharedTableState } from "../../providers/CustomTableProvider/useCustomTableProvider";

export interface CustomTableProps<T> extends SharedTableState<T> {
  rowKey: keyof T;
  title: string;
  onAdd?: () => void;
  renderItem?: () => void;
  children: JSX.Element[];
}

export const useCustomTable = <T>(props: CustomTableProps<T>) => {
  const { title, onAdd, children, rowKey, ...sharedCtx } = props;
  const { data, onDelete, onEdit } = sharedCtx;

  const headers = useMemo(() => {
    const headersFromColumnTemplate = children.map((e) => e.props.children);
    if (onEdit) headersFromColumnTemplate.push("Edit");
    if (onDelete) headersFromColumnTemplate.push("Delete");
    return headersFromColumnTemplate;
  }, []);

  return { title, onAdd, headers, data, children, rowKey, sharedCtx };
};
