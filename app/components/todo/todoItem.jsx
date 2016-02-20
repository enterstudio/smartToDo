import React from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import TodoTextInput from "./TodoTextInput.jsx";

class ToDoItem extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.state.isEditing = true;
    this._onSave = this._onSave.bind(this);
  }

  _onSave(value) {
   console.log(value);
   this.setState({isEditing: false});
 }

  render() {
var todo = this.props.todo;

    return (
      <Grid>
        <Row>
          <Col md={12}>
            <li>
       {todo.title}
       <TodoTextInput onSave={this._onSave} value={todo.title} />
     </li>

          </Col>
        </Row>
      </Grid>
    )
  }
}
export default ToDoItem;
