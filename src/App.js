import React, { Fragment } from 'react';
import { Header, Icon, Grid, Card } from 'semantic-ui-react';
import Clock from 'react-live-clock';

const pageStyle = {
  marginLeft: '45px',
  marginTop: '45px',
  marginRight: '65px'
}
const timeStyle = {
  textAlign: 'right'
}
const timeTextStyle = {
  fontSize: '60px',
  color: "#ffffff"
}
const topHeaderStyle = {
  fontSize: '90px',
  color: "#ffffff"
}
const cardStyle = {
  backgroundColor: "#4E80A2",
  color: "#ffffff"
}
const cardHeaderStyle = {
  fontSize: '55px'
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
        <Header as='h1' style={timeTextStyle}>Current Time</Header>
        <Header as='h2' style={timeTextStyle}>
          <Clock format="HH:mm:ss" ticking={true} interval={1000} />
        </Header>
      </Grid.Column>
    </Grid>
    <Grid columns={4} divided>
    <Grid.Column>
      <Card style={cardStyle}>
        <Card.Header><h1 style={cardHeaderStyle}>2nd Floor</h1></Card.Header>
        <Card.Content><h3>Booked.</h3></Card.Content>
      </Card>
    </Grid.Column>
    <Grid.Column>
      <Card style={cardStyle}>
        <Card.Header><h1 style={cardHeaderStyle}>Room 103</h1></Card.Header>
        <Card.Content><h3>Booked.</h3></Card.Content>
      </Card>
    </Grid.Column>
    <Grid.Column>
      <Card style={cardStyle}>
        <Card.Header><h1 style={cardHeaderStyle}>Room 104</h1></Card.Header>
        <Card.Content><h3>Booked.</h3></Card.Content>
      </Card>
    </Grid.Column>
    <Grid.Column>
      <Card style={cardStyle}>
        <Card.Header><h1 style={cardHeaderStyle}>Room 105</h1></Card.Header>
        <Card.Content><h3>Booked.</h3></Card.Content>
      </Card>
    </Grid.Column>
    </Grid>
  </div>
);

export default App;
