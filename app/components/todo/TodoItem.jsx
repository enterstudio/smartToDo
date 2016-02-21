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
   //this.setState({isCategoryEditing: false});
  }

  _onDoubleClick() {
    this.setState({isEditing: true});
    //this.setState({isCategoryEditing: true});
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
    var d = new Date(todo.mail_date);
    var date = d.toLocaleDateString();
    var from = todo.from.split("<")[0];
    var snippet = todo.snippet.substring(0, 100);
    var input, category;
  if (this.state.isEditing){
     input = <TodoTextInput onSave={this._onSave} value={todo.title}/>;
  }
     category = <TodoCategoryInput editCategory= {this._editCategory} category={todo.category}/>;

    return (
      <div className="todoItem">
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <input onChange={this.toggleComplete} checked={todo.complete} type="checkbox" className="check"/>
              <label className={this.state.isEditing ? 'hidden' : 'label-shown'} onDoubleClick={this._onDoubleClick}>
                {todo.title} <small className="double-inst">Double click to edit</small>
              <div className="mail-info"><small><strong>{from}</strong> <i>sent on</i> {date}</small><hr/>
                <small>{snippet} ...</small></div>
              </label>
              {input}
              <div className={this.state.isEditing ? 'hidden' : 'rightBtns'}>
              {category}
              <Button className='deleteBtn' onClick={this._todoDelete}/>
              </div>
              <div className={this.state.isEditing ? 'shown' : 'hidden'}>
                <small>Click outside or press enter to save</small>
              </div>

          </Col>

        </Row>
      </div>
    )
  }
}
export default ToDoItem;
