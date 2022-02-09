import { TableCell } from "@mui/material";
import { ColumnTemplateProps } from "./useColumnTemplate";

export const ColumnTemplate: React.FC<ColumnTemplateProps> = (props) => {
  const { renderColumn } = props;

  const finalVal = (renderColumn && renderColumn("", "")) || "Sarasa";
  return <TableCell>{finalVal}</TableCell>;
};
