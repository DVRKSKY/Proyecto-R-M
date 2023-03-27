import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './assets/fonts/fonts.sass'

import {Provider} from "react-redux"
import store from './redux/store'

//Se abraza la app - seconecta redux - react
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById('root')
)
