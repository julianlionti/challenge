import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PROEXE Challenge
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
