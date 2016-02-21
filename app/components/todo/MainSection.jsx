import React from 'react';
import {Grid, Row, Col, Panel} from 'react-bootstrap';
import TodoItem from "./TodoItem.jsx";

class MainSection extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    var Alltodos = this.props.Alltodos;
    var meetings = 0,
    deadlines = 0,
    registrations = 0,
    reminders = 0;
    return (
      <Grid>
        <Row>
          <Col lg={8} md={8} sm={8} xs={8}>
            <Panel header="Meetings" bsStyle="primary">
            {Alltodos.map((todo, i) => {
              meetings = (todo.category == "meeting")? meetings+1: meetings;
              return (todo.category == "meeting")? (
                <span key={i}>
                  <h4> <TodoItem todo={todo}/> </h4>
                </span>) : ((i+1 == Alltodos.length && meetings==0)&&(<span>No meeting emails found.</span>))

            })}
          </Panel>
          <Panel header="Registrations / RSVP" bsStyle="success">
            {Alltodos.map((todo, i) => {
              registrations = (todo.category == "registration")? registrations+1: registrations;
              return (todo.category == "registration")? (
                <span key={i}>
                  <h4> <TodoItem todo={todo}/> </h4>
                </span>) : ((i+1 == Alltodos.length && registrations==0)&&(<span>No registration emails found.</span>))

            })}
            </Panel>
            <Panel header="Reminders" bsStyle="info">
            {Alltodos.map((todo, i) => {
              reminders = (todo.category == "reminders")? reminders+1: reminders;
              return (todo.category == "reminders")? (
                <span key={i}>
                  <h4> <TodoItem todo={todo}/> </h4>
                </span>) : ((i+1 == Alltodos.length && reminders==0)&&(<span>No reminder emails found.</span>))

            })}
            </Panel>
            <Panel header="Deadlines" bsStyle="warning">
              {Alltodos.map((todo, i) => {
                deadlines = (todo.category == "deadline")? deadlines+1: deadlines;
                return (todo.category == "deadline")? (
                  <span key={i}>
                    <h4> <TodoItem todo={todo}/> </h4>
                  </span>) : ((i+1 == Alltodos.length && deadlines == 0)&&(<span>No deadline emails found.</span>))

              })}
            </Panel>

          </Col>
        </Row>
      </Grid>
    )
  }
}
export default MainSection;
