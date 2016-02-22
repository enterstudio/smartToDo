
import React from 'react';
import {Jumbotron, Grid, Row, Col, Button, Well} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import TodoApp from "../todo/ToDoApp.jsx";
import UserStore from './../../stores/UserStore.jsx';

class Home extends React.Component {
  constructor(props, context){
    super(props, context);
    this.history = props.history;
    this.state = {};
    this.state.loggedIn = !!((typeof window !== "undefined") ? localStorage.user : undefined);
    this._onChange = this._onChange.bind( this );
    this.showDemo = this.showDemo.bind(this);
  }
  authGmail(e) {
    e.preventDefault();
    console.log('test');
    UserStore.signup();
  }
  showDemo(){
    this.history.replaceState(null, '/hello');
  }

  componentWillMount() {
      UserStore.onChange(this._onChange);
    }
    componentWillUnmount() {
      UserStore.removeChangeListener(this._onChange);
    }
    _onChange() {
      //route to home
      var loggedIn = !!((typeof window !== "undefined") ? localStorage.user : undefined);
      this.setState({loggedIn: loggedIn});
    }
  render(){

    return (
      <Grid fluid={true} className="pageBottom">
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            {!this.state.loggedIn && <div><Jumbotron className="intro">
              <p>Take back your time! Deal with emails efficiently, like never before.</p>
              <img src="static/images/intro.png"/>
            <p>
              <Button bsSize="large" bsStyle="danger" onClick={this.authGmail}>Sign In with Gmail</Button> <Button bsSize="large" bsStyle="primary" onClick={this.showDemo}>Demo with sample Emails</Button><br/>
              <small>Try the demo now!</small>
            </p>
          </Jumbotron>

            <Col lg={6} md={6} sm={5} xs={12}>
              <h2 className="details">Preview</h2>
              <hr/>
              <img className="preview" src="static/images/preview.png"/>
            </Col>
            <Col lg={6} md={6} sm={7} xs={12}>
              <h2 className="details">How it works</h2>

              <hr/>
              <Well className="howitworks">
                <ul>
                  <li>Fetches recent 20 emails for a user (sample emails or from user's Gmail inbox)</li>
                  <li>Applies natural language processing (Naive Bayesian Classification) on each email to classify into the following categories: Meeting, Reminder, Registration, Deadline & Uncategorized. (The categories are determined using Bayesian classifiers created with training data)</li>
                  <li>Converts categorized emails into TODO items, which the user can edit, delete and mark as completed</li>
                </ul>
                <p>This app has been built for the <a href="https://www.koding.com/Hackathon" target="_blank">hack.summit() Virtual Hackathon 2016</a>. </p>
<p>For the <strong>demo with sample emails</strong>, 12 emails are read from <a href="" target="_blank">this sample JSON</a> for a dummy user.</p>
<p>For the <strong>demo with Gmail signin</strong>, 20 emails are fetched only once when a user logs in with their Gmail for the first time. No subsequent fetch calls are made if the user logs out and logs in again.</p> <p>The TODO data is persisted throughout each server session, and resets if the server is restarted.
</p>
<p><em>Disclaimer</em>: The sample size of training data is small given the time constraints, hence high accuracy in email classification is not guaranteed.</p>

<p><a href="https://github.com/tech-dojo/smartToDo" target="_blank">GitHub link to the code</a></p>

<p>Notable APIs used:</p>
<ul>
<li><a href="https://developers.google.com/gmail/api/" target="_blank">Gmail API</a></li>
<li><a href="https://github.com/NaturalNode/natural" target="_blank">Natural</a></li>
<li><a href="https://react-bootstrap.github.io" target="_blank">React-Bootstrap</a></li>
</ul>

              </Well>
            </Col>
              </div>}

          {this.state.loggedIn && <TodoApp login={this.state.loggedIn} />}
        </Col>
      </Row>
    </Grid>
      )
    }
  }
  export default Home;
