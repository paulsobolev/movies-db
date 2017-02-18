import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers'
import createLogger from 'redux-logger'

function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    // applyMiddleware(createLogger())
  )
}

export default configureStore
