import React from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import TodoTextInput from "./TodoTextInput.jsx";
import TodoStore from "../../stores/TodoStore.jsx";

class ToDoItem extends React.Component {
  constructor() {
    super();
    this.state = {};
    this._onSave = this._onSave.bind(this);
    this._todoDelete = this._todoDelete.bind(this);
  }

  _onSave(value) {
    TodoStore.editTodo(this.props.todo, value);
  }

  _todoDelete() {
    TodoStore.deleteTodo(this.props.todo);
  }

  render() {
    var todo = this.props.todo;

    return (
      <Grid>
        <Row>
          <Col lg={1} md={1} sm={1} xs={1}>
              <Button className="todoBtn" onClick={this._todoDelete}>Delete</Button>
          </Col>
          <Col lg={5} md={5} sm={5} xs={5}>
            <ul>
              {todo.title}
            </ul>
          </Col>
          <Col lg={1} md={1} sm={1} xs={1}>
              <Button className="todoBtn" onClick={this._todoDelete}>Delete</Button>
          </Col>
        </Row>
      </Grid>
    )
  }
}
export default ToDoItem;
