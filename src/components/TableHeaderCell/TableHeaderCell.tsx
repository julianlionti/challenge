import { TableCell, TableSortLabel } from "@mui/material";
import { TableHeaderCellProps, useTableHeaderCell } from "./useTableHeaderCell";

const TableHeaderCell = (props: TableHeaderCellProps) => {
  const { title, handleOnSort, isSortable, isActive, direction } =
    useTableHeaderCell(props);
  return (
    <TableCell
      sx={{ bgcolor: "grey.200", color: "black" }}
      align="center"
      key={title}
    >
      {isSortable && (
        <TableSortLabel
          onClick={handleOnSort}
          active={isActive}
          direction={direction || undefined}
        >
          {title}
        </TableSortLabel>
      )}
      {!isSortable && title}
    </TableCell>
  );
};

export default TableHeaderCell;
