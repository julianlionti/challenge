import { useField } from "formik";

export interface TextInputProps {
  id: string;
  title: string;
  placeholder?: string;
  loading?: boolean;
}

export const useTextInput = (props: TextInputProps) => {
  const { id } = props;
  const [inputProps, { error, touched }] = useField(id);
  return { ...props, inputProps, error, hasError: !!error && touched };
};
