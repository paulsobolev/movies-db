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
      // Reset pagination on search
      return 1
    default:
      return state
  }
}

export default combineReducers({
  movies,
  orderBy,
  searchQuery,
  currentPage
})
