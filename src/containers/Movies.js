import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Movies from '../components/Movies'
import {setOrderBy, setSearchQuery, setCurrentPage, toggleGeneratedMovies} from '../store/actions'
import {filterMoviesByQuery, orderMoviesBy} from '../utils'

const pageSize = 20

function mapStateToProps(state) {
  const {movies, generatedMovies, orderBy, searchQuery, currentPage} = state

  let entries = movies
  if (generatedMovies.enabled) {
    entries = [...generatedMovies.entries, ...movies]
  }

  const filteredMovies = filterMoviesByQuery(entries, searchQuery)
  const orderedMovies = orderMoviesBy(filteredMovies, orderBy)
  const lastPage = Math.ceil(orderedMovies.length / pageSize)
  const startFrom = (currentPage - 1) * pageSize

  return {
    movies:              orderedMovies.slice(startFrom, startFrom + pageSize),
    pagination:          {
      currentPage,
      lastPage,
      pageSize
    },
    searchQuery,
    orderBy,
    withGeneratedMovies: generatedMovies.enabled
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setOrderBy:            bindActionCreators(setOrderBy, dispatch),
    setSearchQuery:        bindActionCreators(setSearchQuery, dispatch),
    setCurrentPage:        bindActionCreators(setCurrentPage, dispatch),
    toggleGeneratedMovies: bindActionCreators(toggleGeneratedMovies, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
