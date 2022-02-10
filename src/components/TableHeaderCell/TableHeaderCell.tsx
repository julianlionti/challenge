import { Box, TableCell, TableSortLabel } from "@mui/material";
import { styled } from "@mui/system";
import { TableHeaderCellProps, useTableHeaderCell } from "./useTableHeaderCell";

const DarkHeader = styled(TableCell)`
  background-color: #f2f2f2;
`;

const TableHeaderCell = (props: TableHeaderCellProps) => {
  const { title, handleOnSort, isSortable, isActive, direction } =
    useTableHeaderCell(props);
  return (
    <DarkHeader align="center" key={title}>
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
    </DarkHeader>
  );
};

export default TableHeaderCell;
