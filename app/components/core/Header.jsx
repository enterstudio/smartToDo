import React from 'react';
import { Link } from 'react-router';
import { Nav, Navbar, NavItem, NavDropdown,MenuItem } from 'react-bootstrap';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';

class Header extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {};
    this.navClick = this.navClick.bind(this);
    this.collapse = this.collapse.bind(this);
  }
  navClick(){
    this.setState({expand:false});
  }
  collapse(expanded){
    this.setState({expand: expanded})
  }

  render(){
    return (
      <Navbar
        inverse
        expanded={this.state.expand}
        onToggle={this.collapse}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">SmartToDo</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight onClick={this.navClick}>
            <IndexLinkContainer to="/">
              <NavItem eventKey={1}>Home</NavItem>
            </IndexLinkContainer>
              <LinkContainer to="/signup">
                <MenuItem>
                  Sign Up
                </MenuItem>
              </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header;
