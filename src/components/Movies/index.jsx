import React from 'react';
import {Segment, Table, Menu, Icon, Input, Rating} from 'semantic-ui-react'

function Movies() {
  return (
    <Table singleLine sortable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan="2">Movies</Table.HeaderCell>
          <Table.HeaderCell colSpan="2"><Input fluid placeholder="Search..." /></Table.HeaderCell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell sorted="ascending"><a tabIndex="0">Title</a></Table.HeaderCell>
          <Table.HeaderCell><a tabIndex="0">Genres</a></Table.HeaderCell>
          <Table.HeaderCell><a tabIndex="0">Year</a></Table.HeaderCell>
          <Table.HeaderCell><a tabIndex="0">Rating</a></Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Black hawk down</Table.Cell>
          <Table.Cell>Drama, History, War</Table.Cell>
          <Table.Cell>2001</Table.Cell>
          <Table.Cell><Rating maxRating={5} rating={4} /></Table.Cell>
        </Table.Row>
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan="4">
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
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  )
}

export default Movies
