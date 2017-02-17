import {combineReducers} from 'redux'
import {movies, orderBy, searchQuery} from './movies'

export default combineReducers({
  movies,
  orderBy,
  searchQuery
})
