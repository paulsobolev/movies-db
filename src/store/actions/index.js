import * as ActionTypes from '../constants'
import uuid from 'uuid/v4'

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

export function setCurrentPage(page) {
  return {
    type: ActionTypes.SET_CURRENT_PAGE,
    page
  }
}

export function addVideo(data) {
  return {
    type: ActionTypes.ADD_MOVIE,
    data: Object.assign({}, data, {id: uuid()})
  }
}
