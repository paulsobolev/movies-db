import React from 'react'
import {Grid, Table, Input, Rating, Popup, Segment, Checkbox, Header} from 'semantic-ui-react'
import OrderLink from '../OrderLink'
import Highlighter from '../Highlighter'
import Pagination from '../Pagination'

const propTypes = {
  movies:                React.PropTypes.array.isRequired,
  orderBy:               React.PropTypes.string.isRequired,
  setOrderBy:            React.PropTypes.func.isRequired,
  searchQuery:           React.PropTypes.string.isRequired,
  pagination:            React.PropTypes.shape({
    currentPage: React.PropTypes.number.isRequired,
    lastPage:    React.PropTypes.number.isRequired,
    pageSize:    React.PropTypes.number.isRequired
  }),
  withGeneratedMovies:   React.PropTypes.bool,
  setSearchQuery:        React.PropTypes.func.isRequired,
  setCurrentPage:        React.PropTypes.func.isRequired,
  toggleGeneratedMovies: React.PropTypes.func.isRequired
}

function Movies({
  movies = [], orderBy, setOrderBy, searchQuery, setSearchQuery, pagination, setCurrentPage,
  withGeneratedMovies, toggleGeneratedMovies, ...props
}) {
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
      <Segment>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Header as="h3">
                Movies
              </Header>
              <Checkbox
                toggle
                label="Use preloaded data (1000 entries)"
                checked={withGeneratedMovies}
                onChange={toggleGeneratedMovies}
              />
            </Grid.Column>
            <Grid.Column>
              <Popup
                trigger={SearchField}
                positioning={'left center'}
                content='You may search by title, genres and year'
                on='focus'
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Table compact>
        <Table.Header>
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
              {movies.length > 0 && (
                <div className="clearfix">
                  <Pagination
                    size="tiny"
                    floated="right"
                    currentPage={pagination.currentPage}
                    lastPage={pagination.lastPage}
                    setCurrentPage={setCurrentPage}
                  />
                </div>
              )}
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  )
}

Movies.propTypes = propTypes

export default Movies
