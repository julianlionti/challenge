import React from 'react'
import { Provider } from 'react-redux'
import { persistor, store } from './store/store'
import { BrowserRouter } from 'react-router-dom'
import Main from './routes/Main'
import { CssBaseline } from '@mui/material'
import { injectStore } from './utils/makeRequest'
import { PersistGate } from 'redux-persist/integration/react'

injectStore(store)

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <CssBaseline />
          <Main />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
