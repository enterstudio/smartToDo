import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import MainSection from "./MainSection.jsx";
import TodoStore from "../../stores/TodoStore.jsx";

function getAllTodos() {
  return {todos: TodoStore.getAllTodos()}
}

class TodoApp extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.state.todos = [];
    this.state = getAllTodos();
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    TodoStore.onChange(this._onChange);
  }
  componentWillUnmount() {
    TodoStore.removeChangeListener(this._onChange);
  }
  _onChange() {
    this.setState(getAllTodos());
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col lg={2} md={2} sm={2} xs={2}></Col>
          <Col className="listBody" lg={8} md={8} sm={8} xs={8}>
            <MainSection Alltodos={this.state.todos}/>
          </Col>
        </Row>
      </Grid>
    )
  }
}
export default TodoApp;
