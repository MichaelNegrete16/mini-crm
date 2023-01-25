import React from 'react'

import { Provider } from 'react-redux'
import { store } from './store/store'
import CrmPage from './CRM/page/CrmPage'

const CrmApp = () => {
  return (
    // Creacion del provider para poder acceder a los componentes de redux
    <Provider store={store}>
        <CrmPage/>
    </Provider>
  )
}

export default CrmApp