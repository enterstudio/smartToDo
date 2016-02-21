import React from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import TodoTextInput from "./TodoTextInput.jsx";
import TodoCategoryInput from "./TodoCategoryInput.jsx";
import TodoStore from "../../stores/TodoStore.jsx";

class ToDoItem extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.state.isEditing = false;
      this.state.isCategoryEditing = false;
    this._onSave = this._onSave.bind(this);
    this._todoDelete = this._todoDelete.bind(this);
    this._onDoubleClick  = this._onDoubleClick.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this._editCategory = this._editCategory.bind(this);
  }

  _editCategory(value){
   TodoStore.editTodoCategory(this.props.todo, value);
   this.setState({isCategoryEditing: false});
  }

  _onDoubleClick() {
    this.setState({isEditing: true});
    this.setState({isCategoryEditing: true});
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
    var input, category;
  if (this.state.isEditing){
     input = <TodoTextInput onSave={this._onSave} value={todo.title}/>;
  }
  if (this.state.isCategoryEditing){
     category = <TodoCategoryInput editCategory= {this._editCategory} category={todo.category}/>;
  }
    return (
      <Grid>
        <Row>
          <Col lg={1} md={1} sm={1} xs={1}>
              <input onChange={this.toggleComplete} checked={todo.complete} type="checkbox"/>
          </Col>
          <Col lg={5} md={5} sm={5} xs={5}>
            <ul>
              <label className={this.state.isEditing ? 'hidden' : 'shown'} onDoubleClick={this._onDoubleClick}>
                {todo.title}
              </label>
              {input}

            </ul>
          </Col>

          <Col lg={1} md={1} sm={1} xs={1}>
              <Button className={this.state.isCategoryEditing ? 'hidden' : 'deleteBtn'} onClick={this._todoDelete}/>
              {category}
          </Col>
        </Row>
      </Grid>
    )
  }
}
export default ToDoItem;
