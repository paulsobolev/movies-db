import React from 'react'
import {Table, Menu, Icon, Input, Rating} from 'semantic-ui-react'
import OrderLink from '../OrderLink'

const propTypes = {
  movies:         React.PropTypes.array.isRequired,
  orderBy:        React.PropTypes.string.isRequired,
  setOrderBy:     React.PropTypes.func.isRequired,
  searchQuery:    React.PropTypes.string.isRequired,
  setSearchQuery: React.PropTypes.func.isRequired
}

function Movies({movies = [], orderBy, setOrderBy, searchQuery, setSearchQuery, ...props}) {
  return (
    <div {...props}>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="2">Movies</Table.HeaderCell>
            <Table.HeaderCell colSpan="2">
              <Input
                fluid
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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
              <Table.Cell>{movie.title}</Table.Cell>
              <Table.Cell>{movie.genres.join(', ')}</Table.Cell>
              <Table.Cell>{movie.year}</Table.Cell>
              <Table.Cell>
                <Rating maxRating={5} rating={movie.rating} disabled />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="4">
              <div className="clearfix">
                <Menu floated="right" pagination>
                  <Menu.Item as="a" icon tabIndex="0">
                    <Icon name="left chevron" />
                  </Menu.Item>
                  <Menu.Item as="a" tabIndex="0">1</Menu.Item>
                  <Menu.Item as="a" tabIndex="0">2</Menu.Item>
                  <Menu.Item as="a" tabIndex="0">3</Menu.Item>
                  <Menu.Item as="a" tabIndex="0">4</Menu.Item>
                  <Menu.Item as="a" icon tabIndex="0">
                    <Icon name="right chevron" />
                  </Menu.Item>
                </Menu>
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
