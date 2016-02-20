
import React from 'react';
import {Jumbotron, Grid, Row, Col, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import TodoApp from "../todo/ToDoApp.jsx";
import UserStore from './../../stores/UserStore.jsx';

class Home extends React.Component {
  constructor(props, context){
    super(props, context);
  }
  authGmail(e) {
    e.preventDefault();
    console.log('test');
    UserStore.signup();
  }
  render(){

    return (
      <Grid>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>

          <TodoApp/>
        </Col>
      </Row>
    </Grid>
      )
    }
  }
  export default Home;
