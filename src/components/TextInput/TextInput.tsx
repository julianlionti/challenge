import {
  Box,
  Collapse,
  FormHelperText,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { TextInputProps, useTextInput } from "./useTextInput";

const TextInput: React.FC<TextInputProps> = (props) => {
  const { title, placeholder, error, inputProps, hasError } =
    useTextInput(props);

  return (
    <Box display="flex" alignItems="center">
      <Typography textAlign="center" fontWeight="bold" flex={1}>
        {title}
      </Typography>
      <Box flex={2} my={1}>
        <OutlinedInput
          error={hasError}
          fullWidth
          placeholder={placeholder}
          {...inputProps}
        />
        <Collapse in={hasError}>
          <FormHelperText error={hasError} id="my-helper-text">
            {error}
          </FormHelperText>
        </Collapse>
      </Box>
    </Box>
  );
};

export default TextInput;
