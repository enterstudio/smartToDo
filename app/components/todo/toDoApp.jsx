import React from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import MainSection from "./mainSection.jsx";


class TodoApp extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.state.todos = [];
    this.state.todos = [
      {
        title: "Meeting with boss",
        complete: false
      }, {
        title: "appoinment with secretary",
        complete: false
      }, {
        title: "bill payment of doc",
        complete: false
      }, {
        title: "renew driving license ",
        complete: false
      }, {
        title: "register with hacksummit",
        complete: false
      }, {
        title: "deadline of smartToDo App",
        complete: false
      }
    ];

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
