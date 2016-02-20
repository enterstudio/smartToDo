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
          <Col md={12}>
            <li>
              {todo.title}
              <TodoTextInput onSave={this._onSave} value={todo.title}/>
              <Button onClick={this._todoDelete}>Delete</Button>
            </li>

          </Col>
        </Row>
      </Grid>
    )
  }
}
export default ToDoItem;
