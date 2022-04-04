import React from 'react'
import {createRoot} from 'react-dom/client'
import { Provider } from 'react-redux'
// added line 3 and 4 
import store from './store'
import './styles/index.css'
import App from './App'

const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    {/* // APP SANDWICH ON PROVIDER BREAD */}
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>
)
//// AFTER ^ //////////////////////////////////

// BEFORE //////////////////////////////////////////////////////////////////
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )
