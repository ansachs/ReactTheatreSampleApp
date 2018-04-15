import React from 'react';
import { Menu, Container, Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux'; 
import { Link } from 'react-router-dom'


const DropdownList = (props)=> {
console.log(props)

  return (
  <Dropdown item simple text='Movies'>
  <Dropdown.Menu>
  <Dropdown.Item>movie.title</Dropdown.Item>
  <Dropdown.Item>movie.title</Dropdown.Item>
  {props.movies.map((movie)=>
    <a href="/"><Dropdown.Item>{movie.title}</Dropdown.Item></a>
    )}
  </Dropdown.Menu>
  </Dropdown>
          
)}


export default connect(state => state)(DropdownList);