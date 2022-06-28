import React from 'react'

import { Provider } from 'react-redux'
import { store } from './store/store'
import CrmPage from './CRM/page/CrmPage'

const CrmApp = () => {
  return (
    <Provider store={store}>
        <CrmPage/>
    </Provider>
  )
}

export default CrmApp