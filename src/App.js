import React, { Fragment } from 'react';
import { Header, Icon, Grid } from 'semantic-ui-react';

const pageStyle = {
  marginLeft: '45px',
  marginTop: '45px',
  marginRight: '65px'
}

const timeStyle = {
  textAlign: 'right',
}

const topHeaderStyle = {
  fontSize: '90px',
  color: "#ffffff"
}
const App = () => (
  <div style={pageStyle}>
    <Grid columns={2}>
      <Grid.Column>
        <Header style={topHeaderStyle}>
          <Icon name='book'></Icon>
          <Header.Content>Bookings</Header.Content>
        </Header>
      </Grid.Column>
      <Grid.Column style={timeStyle}>
        <Header as='h1'>Current Time</Header>
      </Grid.Column>
    </Grid>
    <Grid columns={4} divided>
    <Grid.Column>
      <Header as='h2'>Upstairs</Header>
    </Grid.Column>
    <Grid.Column>
      asdasd
    </Grid.Column>
    </Grid>
  </div>
);

export default App;
