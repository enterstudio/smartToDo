import React from 'react';
import { Link } from 'react-router';
import { Nav, Navbar, NavItem, NavDropdown,MenuItem } from 'react-bootstrap';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';
import UserStore from './../../stores/UserStore.jsx';

class Header extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {};
    this.loggedIn = !!((typeof window !== "undefined") ? localStorage.user : undefined);
    if(this.loggedIn){
      this.state.user = (typeof window !== "undefined") ? JSON.parse(localStorage.user) : undefined;
    }
    this.navClick = this.navClick.bind(this);
    this.collapse = this.collapse.bind(this);
    this.signout = this.signout.bind(this);
    this._onChange = this._onChange.bind( this );
  }
  navClick(){
    this.setState({expand:false});
  }
  collapse(expanded){
    this.setState({expand: expanded})
  }
  signout(){
    UserStore.signout();
  }
  componentWillMount() {
      UserStore.onChange(this._onChange);
    }
    componentWillUnmount() {
      UserStore.removeChangeListener(this._onChange);
    }
    _onChange() {
      var user;
      this.loggedIn = !!((typeof window !== "undefined") ? localStorage.user : undefined);
      if(this.loggedIn){
        user = (typeof window !== "undefined") ? JSON.parse(localStorage.user) : undefined;
      }
      this.setState({user: user});
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
                {!this.state.user && <MenuItem>
                   Welcome, Stranger!
                </MenuItem>}
                {this.state.user && <MenuItem onClick={this.signout}>
                Welcome, {this.state.user.email}. SignOut?
                </MenuItem>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header;
