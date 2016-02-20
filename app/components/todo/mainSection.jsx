import React from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import TodoItem from "./todoItem";

class MainSection extends React.Component {
  constructor() {
    super();
    this.state = {};


  }

  render() {
var Alltodos = this.props.Alltodos;

    return (
      <Grid>
        <Row>
          <Col md={12}>
                {Alltodos.map((todo) => {
                  return (
                    <h1  key={todo.title}><TodoItem todo={todo} /> </h1>
                  )})}
          </Col>
        </Row>
      </Grid>
    )
  }
}
export default MainSection;
