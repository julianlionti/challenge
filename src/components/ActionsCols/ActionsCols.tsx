import { Button, TableCell } from "@mui/material";
import { useCustomTableCtx } from "../../providers/CustomTableProvider/useCustomTableProvider";

const ActionsCols = () => {
  const { onDelete, onEdit, ...quepasa } = useCustomTableCtx();
  if (!onDelete && !onEdit) return null;
  return (
    <>
      {onEdit && (
        <TableCell>
          <Button variant="contained" color="warning" onClick={onEdit}>
            Edit
          </Button>
        </TableCell>
      )}
      {onDelete && (
        <TableCell>
          <Button variant="contained" color="error" onClick={onDelete}>
            Delete
          </Button>
        </TableCell>
      )}
    </>
  );
};

export default ActionsCols;
