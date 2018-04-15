import React from 'react';
import { Menu, Container, Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux'; 
import { Link } from 'react-router-dom'
import DropdownList from './DropdownList'

const topNav = ()=> {


  return(
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          Movie Theatre
        </Menu.Item>
        <Menu.Item><Link to="/">Home</Link></Menu.Item>
      </Container>
    </Menu>)
}


export default topNav;