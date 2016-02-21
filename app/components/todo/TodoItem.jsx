import React from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import TodoTextInput from "./TodoTextInput.jsx";
import TodoStore from "../../stores/TodoStore.jsx";

class ToDoItem extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.state.isEditing = false;
    this._onSave = this._onSave.bind(this);
    this._todoDelete = this._todoDelete.bind(this);
    this._onDoubleClick  = this._onDoubleClick.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
  }

  _onDoubleClick() {
    this.setState({isEditing: true});
  }

  _onSave(value) {
    TodoStore.editTodo(this.props.todo, value);
    this.setState({isEditing: false});
  }

  _todoDelete() {
    TodoStore.deleteTodo(this.props.todo);
  }

toggleComplete(){
  TodoStore.toggleComplete(this.props.todo);
}

  render() {
    var todo = this.props.todo;
    var input;
  if (this.state.isEditing){
    console.log("dsf");
     input = <TodoTextInput onSave={this._onSave} value={todo.title}/>;

  }
    return (
      <Grid>
        <Row>
          <Col lg={1} md={1} sm={1} xs={1}>
              <input onChange={this.toggleComplete} checked={todo.complete} type="checkbox"/>
          </Col>
          <Col lg={6} md={6} sm={6} xs={6}>
            <ul>
              <label className={this.state.isEditing ? 'hidden' : 'shown'} onDoubleClick={this._onDoubleClick}>
                {todo.title}
              </label>
              {input}
            </ul>
          </Col>
          <Col lg={1} md={1} sm={1} xs={1}>
              <Button className="deleteBtn" onClick={this._todoDelete}/>
          </Col>
        </Row>
      </Grid>
    )
  }
}
export default ToDoItem;
