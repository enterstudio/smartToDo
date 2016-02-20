import React from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import MainSection from "./MainSection.jsx";
import todoStore from "../../stores/TodoStore.jsx";


class TodoApp extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.state.todos = [];
    this.state.todos = todoStore.getAllTodos();

  }

  render() {


    return (
      <Grid>
        <Row>
          <Col md={12}>
<MainSection  Alltodos= {this.state.todos} />
          </Col>
        </Row>
      </Grid>
    )
  }
}
export default TodoApp;
