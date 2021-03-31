import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export default class Header extends Component{
  render(){
    return(
      <div className="Header">
      <Navbar color="dark" dark expand="md">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#Navbar">Navbar</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#Home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#Profil">Profile</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
    )
  }
}
