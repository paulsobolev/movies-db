import React from 'react'
import {Header, Icon} from 'semantic-ui-react'

function AppHeader() {
  return (
    <Header as="h1" style={{marginBottom: '40px'}}>
      <Icon name="film" />
      <Header.Content>
        Movies DB
        <Header.Subheader>
          Keep your favorites
        </Header.Subheader>
      </Header.Content>
    </Header>
  );
}

export default AppHeader
