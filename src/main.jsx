import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*Componenets including app can access and interact with
    Redux store for state management  */}
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
