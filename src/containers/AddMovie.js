import React, {Component} from 'react';
import { Form, Button, Container, Grid, Ref, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'; 
import {addMovie} from '../actions/MovieActions'


const options = [
  { key: 'PG', text: 'PG', value: 'PG' },
  { key: 'PG-13', text: 'PG-13', value: 'PG-13' },
  { key: 'R', text: 'R', value: 'R' }
]

const mapDispatchToProps = dispatch => ({
  addMovie: (movie) => dispatch(addMovie(movie)),

});


export class AddMovie extends Component {
  constructor(props){
    super(props)
    this.state={
      errors: {title: false,year: false,rated: null, runtime:false },
      errorArray: [],
      title: "",
      rated: null,
      year: "",
      runtime: ""
    }
  }

  handleChange = (e, data)=> {
    this.setState({errors: {...this.state.errors, rated: false}, rated: data.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const errorArray = [];
    const errors ={};

    errors.title = this.validateTitle(this.state.title, errorArray);
    errors.year = this.validateYear(this.state.year, errorArray);
    errors.runtime = this.validateRuntime(this.state.runtime, errorArray);
    errors.rated = this.validateRating(errorArray);
    // debugger;
    this.setState({errors: errors, errorArray: errorArray});
    
    if (errorArray.length  === 0) {
      this.addMovieAndReset();
    }
  }

  addMovieAndReset = () => {
    const initSetting = {title: false,year: false,rated: null, runtime:false }
    const movie = {};
    movie.title = this.state.title;
    movie.year = parseInt(this.state.year, 10)
    movie.rated = this.state.rated
    movie.runtime = parseInt(this.state.runtime, 10)
    this.props.addMovie(movie);
    this.setState({errors: initSetting, rated: null, title: "", year: "", runtime: "", errorArray: []})
  }

  validateTitle = (title, errorArray) => {
    if (title === null || title === "" || title.length > 20) {
      errorArray.push("Title must be > 0 characters and less than 20")
      return true;
    }
    return false
  }

  validateYear = (year, errorArray) => {
    const currentDate = new Date();
    if (year === null || (isNaN(year)) || year < 1900 || year > 
      currentDate.getFullYear() ) {
      errorArray.push("year must between 1900 and current year")
      return true;
    }
    return false;
  }

  validateRating = (errorArray) => {
    if (this.state.errors.rated === null || this.state.errors.rated === true){
      errorArray.push("must select a rating")
      return true
    }
    false
  }

  validateRuntime = (runtime, errorArray) => {

    if (runtime === "" || isNaN(runtime) || runtime <= 0 || runtime > 600) {
      errorArray.push("runtime must be between 0 and 600 minutes")
      return true;
    }
    return false;
  }



  render() {
  return (
    <Container>
      <h2> Add a Movie </h2>
      <Form onSubmit={(e)=>this.handleSubmit(e)} error={this.state.errorArray.length > 0 }>
        <Form.Group >
            <Form.Input fluid 
            width={4}
            label="Title" 
            name="title" 
            placeholder="Title" 
            onChange={(e, data)=>{this.setState({title: data.value})}} 
            value={this.state.title} 
            error={this.state.errors.title}/>

            <Form.Input fluid
            width={2}
            label='Year' 
            name="year" 
            placeholder='Year' 
            onChange={(e, data)=>{this.setState({year: data.value})}} 
            value={this.state.year} 
            error={this.state.errors.year}/>

            <Form.Select fluid 
            width={2}
            label='Rated' 
            name="rated" 
            options={options} 
            placeholder='Rated' 
            onChange={(e, data)=>{this.handleChange(e, data)}} 
            value={this.state.rated} error={this.state.errors.rated}/>

            <Form.Input fluid
            width={2} 
            label='Runtime(minutes)' 
            name="runtime" 
            placeholder='Runtime' 
            onChange={(e, data)=>{this.setState({runtime: data.value})}} 
            value={this.state.runtime} 
            error={this.state.errors.runtime}/>
          
        </Form.Group>
        <Message
          error
          header='Error Submitting'
          list={this.state.errorArray} /> 
        <Button>Submit</Button>
        </Form>
      </Container>
    )
  }
}

export default connect(state=>state, mapDispatchToProps)(AddMovie);