import { useNavigate } from "react-router-dom";

export interface HeaderProps {
  withBack?: boolean;
}

export const useHeader = (props: HeaderProps) => {
  const { withBack } = props;
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return { goBack, withBack };
};
