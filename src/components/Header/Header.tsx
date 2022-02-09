import {
  AppBar,
  Box,
  Button,
  Icon,
  IconButton,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { HeaderProps, useHeader } from "./useHeader";

const IconRoot = styled("div")`
  min-width: 48px;
`;
const WitheIcon = styled(Icon)`
  color: white;
`;

const Header: React.FC<HeaderProps> = (props) => {
  const { withBack, goBack } = useHeader(props);

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconRoot>
            {withBack && (
              <IconButton onClick={goBack}>
                <WitheIcon>arrow_back</WitheIcon>
              </IconButton>
            )}
          </IconRoot>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PROEXE Challenge
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
