import React from 'react';
import { List, Card, Col, Grid, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'



const scheduleTimes = (times) => times.map((time)=>(
<div className="times" key={time.start}>
  {time.start} - {time.end}
</div>
  ))

const ScheduleDisplay = (props) => {
  // console.log(props)
  return (
  <Grid>
    <Grid.Column width={6}>
      <Card centered={true} >
        <Card.Content textAlign="center">
          <h1>{props.movie.title}</h1>
          <Card.Header>
            <h2>Weekday Hours</h2>
          </Card.Header>
          <Card.Description>
          {scheduleTimes(props.schedule.weekday)}
          </Card.Description>
          <Card.Header>
            <h2>Weekend Hours</h2>
          </Card.Header>
          <Card.Description>
          {scheduleTimes(props.schedule.weekend)}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <div className='ui buttons'>
          <Button basic color='red'><Link to="/">Movie List</Link></Button>
        </div>
      </Card.Content>
      </Card>
    </Grid.Column>
  </Grid>)

  }

export default ScheduleDisplay;