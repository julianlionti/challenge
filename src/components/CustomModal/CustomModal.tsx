import {
  Button,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  LinearProgress,
  Typography,
} from "@mui/material";
import { CustomModalProps, useCustomModal } from "./useCustomModal";

const CustomModal: React.FC<CustomModalProps> = (props) => {
  const { message, onClose, show, title, ActionBtn, loading } =
    useCustomModal(props);
  return (
    <Dialog maxWidth="xs" open={show}>
      <DialogTitle>{title}</DialogTitle>
      <Collapse in={loading}>
        <LinearProgress />
      </Collapse>
      <DialogContent dividers>
        <Typography variant="body2">{message}</Typography>
      </DialogContent>
      <DialogActions>
        <Button disabled={loading} autoFocus onClick={onClose}>
          Cancel
        </Button>
        {ActionBtn}
      </DialogActions>
    </Dialog>
  );
};

export default CustomModal;
