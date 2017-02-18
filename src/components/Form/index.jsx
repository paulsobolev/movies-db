import React from 'react'
import {Segment, Header, Form, Rating, Button, Message} from 'semantic-ui-react'
import {generateYears} from '../../utils'
import {genresPreset} from '../../store/constants'

const genresOptions = genresPreset.map((g) => ({key: g, value: g, text: g}))
const yearOptions = generateYears(30)

const defaultState = {
  title:   '',
  genres:  [],
  year:    '',
  rating:  '',
  touched: false
}

const propTypes = {
  onSubmit: React.PropTypes.func.isRequired
}

class MovieForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = defaultState

    this.touch = this.touch.bind(this)
    this.submit = this.submit.bind(this)
    this.reset = this.reset.bind(this)
  }

  touch() {
    this.setState({
      touched: true
    })
  }

  update(data) {
    this.setState(Object.assign({}, this.state, data))
  }

  submit(e) {
    e.preventDefault()

    const formData = this.state
    delete formData.touched

    this.props.onSubmit(formData)
    this.reset(e)
  }

  reset(e) {
    e.preventDefault()

    this.setState(defaultState)
  }

  isValid() {
    const {title, genres, year} = this.state

    return title && genres.length && year
  }

  isEmpty() {
    const {title, genres, year, rating} = this.state

    return !title && !genres.length && !year && !rating
  }

  render() {
    const {title, genres, year, rating, touched} = this.state
    const isValid = this.isValid()
    const isEmpty = this.isEmpty()

    return (
      <Segment>
        <Header as="h3">
          <Header.Content>
            Add new movie
            <Header.Subheader>
              All fields are required
            </Header.Subheader>
          </Header.Content>
        </Header>
        <Form>
          <Form.Input
            fluid
            placeholder="Movie title"
            value={title}
            onChange={(e) => this.update({title: e.target.value})}
            onBlur={this.touch}
          />
          <Form.Select
            inline
            placeholder="Genres"
            options={genresOptions}
            multiple
            value={genres}
            onChange={(e, control) => this.update({genres: control.value})}
            onBlur={this.touch}
          />
          <Form.Select
            inline
            placeholder='Year'
            options={yearOptions}
            value={year}
            onChange={(e, control) => this.update({year: control.value})}
            onBlur={this.touch}
          />
          <Form.Field inline>
            <label>Rating</label>
            <Rating
              size="large"
              clearable
              maxRating={5}
              rating={rating}
              onRate={(e, data) => this.update({rating: data.rating})}
              onBlur={this.touch}
            />
          </Form.Field>
          <div className="clearfix">
            <Button
              primary
              type="button"
              floated="right"
              icon="checkmark"
              content="Save"
              onClick={this.submit}
              disabled={!isValid}
            />
            <Button
              type="button"
              floated="right"
              icon="remove"
              content="Reset"
              onClick={this.reset}
              disabled={isEmpty}
            />
          </div>
          {(!isValid && touched) && (
            <Message warning visible floating>
              Please fill out the form completely to save the movie
            </Message>
          )}
        </Form>
      </Segment>
    )
  }
}

MovieForm.propTypes = propTypes

export default MovieForm
