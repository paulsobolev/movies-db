import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Movies from '../components/Movies'
import {setOrderBy, setSearchQuery, setCurrentPage} from '../store/actions'
import {filterMoviesByQuery, orderMoviesBy} from '../utils'

const pageSize = 20

function mapStateToProps(state) {
  const {movies, orderBy, searchQuery, currentPage} = state
  const filteredMovies = filterMoviesByQuery(movies, searchQuery)
  const orderedMovies = orderMoviesBy(filteredMovies, orderBy)
  const lastPage = Math.ceil(orderedMovies.length / pageSize)
  const startFrom = (currentPage - 1) * pageSize

  return {
    movies:     orderedMovies.slice(startFrom, startFrom + pageSize),
    pagination: {
      currentPage,
      lastPage,
      pageSize
    },
    searchQuery,
    orderBy
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setOrderBy:     bindActionCreators(setOrderBy, dispatch),
    setSearchQuery: bindActionCreators(setSearchQuery, dispatch),
    setCurrentPage: bindActionCreators(setCurrentPage, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
