import React from 'react'
import {connect} from 'react-redux'
import Movies from '../components/Movies'
import {setOrderBy, setSearchQuery} from '../store/actions'
import {filterMoviesByQuery, orderMoviesBy} from '../utils'

function mapStateToProps(state) {
  const {movies, orderBy, searchQuery} = state
  const filteredMovies = filterMoviesByQuery(movies, searchQuery)
  const orderedMovies = orderMoviesBy(filteredMovies.slice(0, 20), orderBy)

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
