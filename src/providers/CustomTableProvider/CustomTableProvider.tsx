import React from 'react'
import { CustomTableCtx, CustomTableCtxState } from './useCustomTableProvider'

const CustomTableProvider: React.FC<CustomTableCtxState> = (props) => {
  const { children, ...ctxInitialValues } = props
  return (
    <CustomTableCtx.Provider value={ctxInitialValues}>
      {children}
    </CustomTableCtx.Provider>
  )
}

export default CustomTableProvider
