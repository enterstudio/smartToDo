
import React from 'react';
import {Jumbotron, Grid, Row, Col, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import TodoApp from "../todo/ToDoApp.jsx";
import UserStore from './../../stores/UserStore.jsx';

class Home extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {};
    this.state.loggedIn = !!((typeof window !== "undefined") ? localStorage.user : undefined);
    this._onChange = this._onChange.bind( this );
  }
  authGmail(e) {
    e.preventDefault();
    console.log('test');
    UserStore.signup();
  }

  componentWillMount() {
      UserStore.onChange(this._onChange);
    }
    componentWillUnmount() {
      UserStore.removeChangeListener(this._onChange);
    }
    _onChange() {
      //route to home
      var loggedIn = !!((typeof window !== "undefined") ? localStorage.user : undefined);
      this.setState({loggedIn: loggedIn});
    }
  render(){

    return (
      <Grid fluid={true} className="pageBottom">
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            {!this.state.loggedIn && <Jumbotron className="intro">
              <p>Take back your time! Deal with emails efficiently, like never before.</p>
              <img src="static/images/intro.png"/>
            <p>
              <Button bsSize="large" bsStyle="danger" onClick={this.authGmail}>Sign In with Gmail</Button><br/>
              <small>Try the demo now!</small>
            </p>
          </Jumbotron>}

          {this.state.loggedIn && <TodoApp login={this.state.loggedIn} />}
        </Col>
      </Row>
    </Grid>
      )
    }
  }
  export default Home;
