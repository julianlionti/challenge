import React from 'react'
import {
  AppBar,
  Box,
  Collapse,
  Icon,
  IconButton,
  styled,
  Toolbar,
  Typography,
} from '@mui/material'
import { HeaderProps, useHeader } from './useHeader'

const IconRoot = styled('div')`
  min-width: 48px;
`
const WhiteIcon = styled(Icon)`
  color: white;
`

const Header: React.FC<HeaderProps> = (props) => {
  const { canGoBack, goBack, theme, toggleTheme } = useHeader(props)

  return (
    <Box>
      <AppBar position='static'>
        <Toolbar>
          <IconRoot>
            <Collapse in={canGoBack} orientation='horizontal'>
              <IconButton onClick={goBack}>
                <WhiteIcon>arrow_back</WhiteIcon>
              </IconButton>
            </Collapse>
          </IconRoot>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            PROEXE Challenge
          </Typography>
          <Box>
            <IconButton onClick={toggleTheme}>
              <WhiteIcon>
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </WhiteIcon>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
