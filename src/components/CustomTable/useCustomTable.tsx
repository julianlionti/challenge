import { createContext, useMemo } from "react";
import { ColumnTemplate } from "../ColumnTemplate/ColumnTemplate";

export interface CustomTableProps<T> {
  rowKey?: String;
  title: string;
  onAdd?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  renderItem?: () => void;
  data: T[];
  children: JSX.Element[];
}

interface CustomTableCtx {
  data: any[];
}
const initialCtxState = { data: [] };
export const CustomTableCtx = createContext(initialCtxState);

export const useCustomTable = <T,>(props: CustomTableProps<T>) => {
  const { title, onAdd, onEdit, onDelete, data, children } = props;

  const headers = useMemo(() => {
    const headersFromColumnTemplate = children.map((e) => e.props.children);
    if (onEdit) headersFromColumnTemplate.push("Edit");
    if (onDelete) headersFromColumnTemplate.push("Delete");
    return headersFromColumnTemplate;
  }, []);

  return { title, onAdd, headers, data, children };
};
