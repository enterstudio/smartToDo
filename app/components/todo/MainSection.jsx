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
<div>
          <Col lg={6} md={6} sm={12} xs={12}>
            <Panel header="Meetings" bsStyle="primary">
            {Alltodos.map((todo, i) => {
              meetings = (todo.category == "meeting")? meetings+1: meetings;
              return (todo.category == "meeting")? (
                <span key={i}>
                  <h4> <TodoItem todo={todo}/> </h4>
                  <hr className="hrMeeting"/>
                </span>) : ((i+1 == Alltodos.length && meetings==0)&&(<span>No meeting emails found.<hr className="hrMeeting"/></span>))

            })}
          </Panel>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
          <Panel header="Registrations / RSVP" bsStyle="success">
            {Alltodos.map((todo, i) => {
              registrations = (todo.category == "registration")? registrations+1: registrations;
              return (todo.category == "registration")? (
                <span key={i}>
                  <h4> <TodoItem todo={todo}/> </h4>
                  <hr className="hrRegistration"/>
                </span>) : ((i+1 == Alltodos.length && registrations==0)&&(<span>No registration emails found.<hr className="hrRegistration"/></span>))

            })}
            </Panel>
              </Col>

              <Col lg={6} md={6} sm={12} xs={12}>
            <Panel header="Deadlines" bsStyle="warning">
              {Alltodos.map((todo, i) => {
                deadlines = (todo.category == "deadline")? deadlines+1: deadlines;
                return (todo.category == "deadline")? (
                  <span key={i}>
                    <h4> <TodoItem todo={todo}/> </h4>
                    <hr className="hrDeadlines"/>
                  </span>) : ((i+1 == Alltodos.length && deadlines == 0)&&(<span>No deadline emails found.<hr className="hrDeadlines"/></span>))

              })}
            </Panel>

          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
        <Panel header="Reminders" bsStyle="info">
        {Alltodos.map((todo, i) => {
          reminders = (todo.category == "reminders")? reminders+1: reminders;
          return (todo.category == "reminders")? (
            <span key={i}>
              <h4> <TodoItem todo={todo}/> </h4>
              <hr className="hrReminders"/>
            </span>) : ((i+1 == Alltodos.length && reminders==0)&&(<span>No reminder emails found.<hr className="hrReminders"/></span>))

        })}
        </Panel>
          </Col>
</div>
    )
  }
}
export default MainSection;
