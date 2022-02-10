import { Button, TableCell } from "@mui/material";
import { ActionColsProps, useActionsCols } from "./useActionsCols";

const ActionsCols: React.FC<ActionColsProps> = (props) => {
  const { onDelete, onEdit, data } = useActionsCols(props);

  if (!onDelete && !onEdit) return null;
  return (
    <>
      {onEdit && (
        <TableCell align="center">
          <Button variant="contained" color="warning" onClick={onEdit}>
            Edit
          </Button>
        </TableCell>
      )}
      {onDelete && (
        <TableCell align="center">
          <Button variant="contained" color="error" onClick={onDelete}>
            Delete
          </Button>
        </TableCell>
      )}
    </>
  );
};

export default ActionsCols;
