import React from 'react'
import {Table, Input, Rating, Popup} from 'semantic-ui-react'
import OrderLink from '../OrderLink'
import Highlighter from '../Highlighter'
import Pagination from '../Pagination'

const propTypes = {
  movies:         React.PropTypes.array.isRequired,
  orderBy:        React.PropTypes.string.isRequired,
  setOrderBy:     React.PropTypes.func.isRequired,
  searchQuery:    React.PropTypes.string.isRequired,
  pagination:     React.PropTypes.shape({
    currentPage: React.PropTypes.number.isRequired,
    lastPage:    React.PropTypes.number.isRequired,
    pageSize:    React.PropTypes.number.isRequired
  }),
  setSearchQuery: React.PropTypes.func.isRequired,
  setCurrentPage: React.PropTypes.func.isRequired
}

function Movies({movies = [], orderBy, setOrderBy, searchQuery, setSearchQuery, pagination, setCurrentPage, ...props}) {
  const SearchField = (
    <Input
      fluid
      placeholder="Search..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  )

  return (
    <div {...props}>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="2">Movies</Table.HeaderCell>
            <Table.HeaderCell colSpan="2">
              <Popup
                trigger={SearchField}
                header='Movie Search'
                content='You may search by title, genres and year'
                on='focus'
              />
            </Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>
              <OrderLink field="title" orderedBy={orderBy} onClick={setOrderBy}>Title</OrderLink>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <OrderLink field="genres" orderedBy={orderBy} onClick={setOrderBy}>Genres</OrderLink>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <OrderLink field="year" orderedBy={orderBy} onClick={setOrderBy}>Year</OrderLink>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <OrderLink field="rating" orderedBy={orderBy} onClick={setOrderBy}>Rating</OrderLink>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {movies.map((movie) => (
            <Table.Row key={movie.id}>
              <Table.Cell>
                <Highlighter string={movie.title} query={searchQuery} />
              </Table.Cell>
              <Table.Cell>
                <Highlighter string={movie.genres.join(', ')} query={searchQuery} />
              </Table.Cell>
              <Table.Cell>{movie.year}</Table.Cell>
              <Table.Cell>
                <Rating maxRating={5} rating={movie.rating} disabled />
              </Table.Cell>
            </Table.Row>
          ))}
          {!movies.length && (
            <Table.Row>
              <Table.Cell colSpan="4">
                {searchQuery ? 'No results were found' : 'Database is empty'}
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="4">
              <div className="clearfix">
                <Pagination
                  size="tiny"
                  floated="right"
                  currentPage={pagination.currentPage}
                  lastPage={pagination.lastPage}
                  setCurrentPage={setCurrentPage}
                />
              </div>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  )
}

Movies.propTypes = propTypes

export default Movies
