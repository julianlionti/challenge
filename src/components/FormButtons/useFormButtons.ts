import { useFormikContext } from "formik";

export interface FormButtonProps {
  onCancel: () => void;
}

export const useFormButtons = (props: FormButtonProps) => {
  const { submitForm } = useFormikContext();
  return { submitForm, ...props };
};
