import React, { Component } from 'react';
import {connect} from 'react-redux'; 
import Showing from './Showing'
import AddMovie from './AddMovie'
import { Container } from 'semantic-ui-react'
import Nav from '../components/Nav'

class MovieList extends Component {

_handleSubmit = () => {

}


  render() {
    return (
      <Container className="movieDisplay">
        <AddMovie />
        <Showing movies={this.props.movies} /> 
        
      </Container>
    )
  }
}

export default connect(state => state)(MovieList);