import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import makeStore from './redux/store'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css'
import './css/index.css'

import App from './App'
axios.defaults.baseURL = 'http://localhost:5000/api'

const store = makeStore()

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
)
