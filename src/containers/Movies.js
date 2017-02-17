import React from 'react'
import {connect} from 'react-redux'
import Movies from '../components/Movies'
import {setOrderBy, setSearchQuery} from '../store/actions'

function mapStateToProps(state) {
  return {
    movies:      state.movies,
    orderBy:     state.orderBy,
    searchQuery: state.searchQuery
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setOrderBy:     (field) => dispatch(setOrderBy(field)),
    setSearchQuery: (query) => dispatch(setSearchQuery(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
