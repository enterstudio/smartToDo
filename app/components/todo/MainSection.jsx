import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import TodoItem from "./TodoItem.jsx";

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
          <Col lg={8} md={8} sm={8} xs={8}>

            {Alltodos.map((todo) => {
              return (
                <h4 key={todo.title}> <TodoItem todo={todo}/> </h4>
              )
            })}
          </Col>
        </Row>
      </Grid>
    )
  }
}
export default MainSection;
