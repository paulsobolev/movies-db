import {combineReducers} from 'redux'
import * as ActionTypes from '../constants'
import {changeOrderDirection} from '../../utils'

function movies(state = [], action) {
  switch (action.type) {
    case ActionTypes.ADD_MOVIE:
      return [
        ...state,
        action.data
      ]
    default:
      return state
  }
}

function generatedMovies(state = {entries: [], enabled: false}, action) {
  switch (action.type) {
    case ActionTypes.TOGGLE_GENERATED_MOVIES:
      return Object.assign({}, state, {enabled: !state.enabled})
    default:
      return state
  }
}

function orderBy(state = 'title', action) {
  switch (action.type) {
    case ActionTypes.SET_ORDER_BY:
      return changeOrderDirection(state, action.field)
    default:
      return state
  }
}

function searchQuery(state = '', action) {
  switch (action.type) {
    case ActionTypes.SET_SEARCH_QUERY:
      return action.query
    default:
      return state
  }
}

function currentPage(state = 1, action) {
  switch (action.type) {
    case ActionTypes.SET_CURRENT_PAGE:
      return action.page
    case ActionTypes.SET_SEARCH_QUERY:
    case ActionTypes.TOGGLE_GENERATED_MOVIES:
      return 1 // reset current page
    default:
      return state
  }
}

export default combineReducers({
  movies,
  generatedMovies,
  orderBy,
  searchQuery,
  currentPage
})
