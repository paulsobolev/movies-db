import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import './index.css'

import App from './components/App'
import configureStore from './store'

import _movies from './_movies.json'
const state = {
  generatedMovies: {
    entries: _movies,
    enabled: true
  },
  orderBy:         'title'
}

const store = configureStore(state)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
