import { Box, Button } from "@mui/material";
import { FormButtonProps, useFormButtons } from "./useFormButtons";

const FormButtons: React.FC<FormButtonProps> = (props) => {
  const { submitForm, onCancel } = useFormButtons(props);
  return (
    <Box display="flex" justifyContent="flex-end" mt={4}>
      <Button onClick={onCancel} variant="outlined" color="warning">
        Cancel
      </Button>
      <Box width={16} />
      <Button onClick={submitForm} variant="contained" color="success">
        Submit
      </Button>
    </Box>
  );
};

export default FormButtons;
