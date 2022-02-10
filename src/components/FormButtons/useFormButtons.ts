import { useFormikContext } from "formik";

export interface FormButtonProps {
  onCancel: () => void;
  loading?: boolean;
}

export const useFormButtons = (props: FormButtonProps) => {
  const { submitForm } = useFormikContext();
  return { submitForm, ...props };
};
