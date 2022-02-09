import { useCustomTableCtx } from "../../providers/CustomTableProvider/useCustomTableProvider";

export interface ActionColsProps {
  index: number;
}

export const useActionsCols = (props: ActionColsProps) => {
  const { index } = props;
  const { onDelete, onEdit, data } = useCustomTableCtx();
  const rowData = data[index];

  const onEditAction = () => {
    if (onEdit) onEdit(rowData);
  };

  const onDeleteAction = () => {
    if (onDelete) onDelete(rowData);
  };

  return { onDelete: onDeleteAction, onEdit: onEditAction, data, rowData };
};
