import './App.css'
import React from 'react'
import {Container, Grid, Segment} from 'semantic-ui-react'
import Header from '../Header'
import Form from '../Form'
import Movies from '../../containers/Movies'

class App extends React.Component {
  render() {
    return (
      <Segment basic className="app">
        <Header />
        <Container fluid>
          <Grid stackable centered>
            <Grid.Column mobile={10} computer={6}>
              <Form />
            </Grid.Column>
            <Grid.Column mobile={16} computer={10}>
              <Movies />
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    );
  }
}

export default App
