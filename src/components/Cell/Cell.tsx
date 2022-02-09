import { memo } from "react";
import { CellProps, useCell } from "./useCell";
import { TableCell } from "@mui/material";

const Cell = memo((props: CellProps) => {
  const { value } = useCell(props);
  return <TableCell align="center">{value}</TableCell>;
});

export default Cell;
