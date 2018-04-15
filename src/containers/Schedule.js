import React, { Component } from 'react';
import {connect} from 'react-redux'; 
import ScheduleDisplay from '../components/ScheduleDisplay'
import { Container } from 'semantic-ui-react'
import Nav from '../components/Nav'

export class Schedule extends Component {

  getSchedule = () => {
    const iD = this.props.match.params.movieID;
    const movie = this.props.movies[iD]
    const cinema = this.props.theatreHours
    const output = {}
    const weekendHours = this.getHourArray(movie.runtime, cinema.weekend)
    const weekdayHours = this.getHourArray(movie.runtime, cinema.weekday)
    output.weekend = this.formatTime(weekendHours);
    output.weekday = this.formatTime(weekdayHours);
    return output;
  }

  getHourArray = (runtime,hours) => {
    const actualRuntime = runtime + 15 + 20;
    const showTimes = [];
    const modifiedStart = Math.round(hours.start/100) * 60.00 + hours.start % 100;
    const modifiedEnd = Math.round(hours.end/100) * 60.00 + hours.end % 100;
    
    for(let i = modifiedStart + 15; i <= modifiedEnd - actualRuntime; i+= actualRuntime){
      let showing = {}
      i += (i % 5 > 0 ? 5 - (i%5) : 0);
      showing.start = i;
      const showingEnd = i + actualRuntime - 20; 
      showing.end = showingEnd;
      showTimes.push(showing);
    }
    return showTimes
  }

  formatTime(hours){

    let finalHours = hours.map((obj)=>{
      let output = {};
      Object.keys(obj).forEach((key)=>{

        let tag = obj[key]/60 > 12 ? "PM" : "AM"
        let min = obj[key] % 60 < 10 ? "0" + obj[key] % 60 : (obj[key] % 60).toString()
        let hour = Math.floor(obj[key]/60) % 12 === 0 ? 12 : Math.floor(obj[key]/60) % 12 
        output[key] = hour.toString() + ":" + min + " " + tag;
      })
      return output;
    })
    return finalHours
  }
  
  render() {
    return (
      <Container>
        <ScheduleDisplay schedule={this.getSchedule()} movie={this.props.movies[this.props.match.params.movieID]}/>
      </Container>
    )
  }
}

export default connect(state => state)(Schedule);