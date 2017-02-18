import React from 'react'
import {connect} from 'react-redux'
import Movies from '../components/Movies'
import {setOrderBy, setSearchQuery} from '../store/actions'
import {orderMoviesBy} from '../utils'

function mapStateToProps(state) {
  const {movies, orderBy, searchQuery} = state
  const filteredMovies = movies.slice(0, 20)
  const orderedMovies = orderMoviesBy(filteredMovies, orderBy)

  return {
    movies:      orderedMovies,
    orderBy:     orderBy,
    searchQuery: searchQuery
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setOrderBy:     (field) => dispatch(setOrderBy(field)),
    setSearchQuery: (query) => dispatch(setSearchQuery(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
