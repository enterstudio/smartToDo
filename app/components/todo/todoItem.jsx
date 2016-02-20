import React from 'react';
import { Grid, Row, Col, Button} from 'react-bootstrap';
import TodoTextInput from "./TodoTextInput";

class ToDoItem extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.state.isEditing = true;

  }

  render() {
var todo = this.props.todo;

    return (
      <Grid>
        <Row>
          <Col md={12}>
            <li>
       {todo.title}
       <TodoTextInput value={todo.title} />
     </li>

          </Col>
        </Row>
      </Grid>
    )
  }
}
export default ToDoItem;
