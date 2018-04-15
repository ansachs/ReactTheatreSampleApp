import React from 'react';
import { List, Card, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'; 
import { removeMovie } from '../actions/MovieActions'


const Showing = (props) => {
 const movieList = props.movies.map((movie, index)=>
    <List.Item key={movie.title}>
      <Card>
       <Card.Content>
        <Card.Header>
        <Link to={"/movie/"+index}>{movie.title}</Link>
      </Card.Header>
      <Card.Description>
        ({movie.year}). Rated {movie.rated}. {movie.runtime} minutes
      </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui buttons'>
          <Button basic color='red' onClick={()=> {props.dispatch(removeMovie(index))}}>Delete</Button>
        </div>
      </Card.Content>
      
      </Card>
    </List.Item>)

  return(

    <List style={{"listStyle": "none"}}>
    {movieList} 
    </List>
    )
}

export default connect()(Showing);