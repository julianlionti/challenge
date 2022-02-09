import { useCustomTableCtx } from "../../providers/CustomTableProvider/useCustomTableProvider";
import { ColumnTemplateProps } from "../ColumnTemplate/ColumnTemplate";

export interface CellProps extends ColumnTemplateProps {
  index: number;
}

const get = (t: Object, path: string) =>
  path.split(".").reduce((r, k) => r?.[k], t as any);

export const useCell = (props: CellProps) => {
  const { renderColumn, bindKey, index } = props;
  const { data } = useCustomTableCtx();
  const rowData = data[index];
  const cellValue = get(rowData, bindKey);
  const finalVal =
    (renderColumn && renderColumn("", rowData)) || cellValue || "-";

  return { value: finalVal };
};
