import React from 'react';
import {Segment, Header, Form, Rating, Button} from 'semantic-ui-react'
import {generateYears} from '../../utils'

const years = generateYears(30)

function AddMovieForm() {
  return (
    <Segment>
      <Header as="h4">New movie</Header>
      <Form>
        <Form.Input fluid placeholder="Movie title" />
        <Form.Select inline placeholder="Genres" options={years} multiple />
        <Form.Select inline placeholder='Year' options={years} />

        <Form.Field inline>
          <label>Rating</label>
          <Rating
            size="large"
            clearable
            maxRating={5}
            onRate={(e, data) => console.info("onRate", e, data)}
          />
        </Form.Field>

        <div className="clearfix">
          <Button primary type="submit" floated="right" icon="checkmark" content="Save" />
        </div>
      </Form>
    </Segment>
  )
}

export default AddMovieForm
