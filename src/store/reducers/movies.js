import * as ActionTypes from '../constants'
import {changeOrderDirection} from '../../utils'

export function movies(state = [], action) {
  switch (action.type) {
    default:
      return state
  }
}

export function orderBy(state = 'title', action) {
  switch (action.type) {
    case ActionTypes.SET_ORDER_BY:
      return changeOrderDirection(state, action.field)
    default:
      return state
  }
}

export function searchQuery(state = '', action) {
  switch (action.type) {
    case ActionTypes.SET_SEARCH_QUERY:
      return action.query
    default:
      return state
  }
}
