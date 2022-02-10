import React from 'react'
import { styled } from '@mui/material'
import { ThemeProvider } from '@mui/system'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header/Header'
import Dashboard from '../pages/Dashboard/Dashboard'
import UserCreation from '../pages/UserCreation/UserCreation'
import { useConfigurationState } from '../reducers/configurationReducer'
import darkTheme from '../themes/darkTheme'
import lightTheme from '../themes/lightTheme'

const MainRoot = styled('main')`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = () => {
  const { theme } = useConfigurationState()
  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <MainRoot>
        <Header />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/user_creation' element={<UserCreation />} />
        </Routes>
      </MainRoot>
    </ThemeProvider>
  )
}

export default Main
