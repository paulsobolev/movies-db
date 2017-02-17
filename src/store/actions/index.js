import * as ActionTypes from '../constants'

export function setOrderBy(field) {
  return {
    type: ActionTypes.SET_ORDER_BY,
    field
  }
}

export function setSearchQuery(query) {
  return {
    type: ActionTypes.SET_SEARCH_QUERY,
    query
  }
}
