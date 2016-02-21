import React from 'react';
import {Button, Col, Panel} from 'react-bootstrap';
import TodoStore from "../../stores/TodoStore.jsx";
import TodoItem from "./TodoItem.jsx";

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.state.uncategorised = false;
    this._clearCompleted = this._clearCompleted.bind(this);
    this._toggleUncategorised = this._toggleUncategorised.bind(this);
  }

  _clearCompleted() {
    TodoStore.clearCompleted();
  }
  _toggleUncategorised(){
    this.state.uncategorised = !this.state.uncategorised;
    this.setState({uncategorised: this.state.uncategorised});
  }
  render() {
    var Alltodos = this.props.Alltodos;
    var total = Alltodos.length;
    var uncategorised = 0;

    if (total === 0) {
      return null;
    }

    var completed = 0;
    {
      Alltodos.map((todo) => {
        if (todo.complete) {
          completed++;
        }
      })
    }

    var itemsLeft = total - completed;
    var itemsLeftPhrase = ' Incomplete';
    itemsLeftPhrase += itemsLeft === 1
      ? ' ToDo '
      : ' ToDos ';

    return (
      <div>
        <Col lg={12} md={12} sm={12} xs={12}>
        <div className="leftPhrase">
          <strong>
            {itemsLeft}
          </strong>
          {itemsLeftPhrase} | <span className="point" onClick={this._toggleUncategorised}>{this.state.uncategorised? 'Hide' : 'View'} Uncategorised ToDos</span> | <span className="point">Fetch Latest Emails</span>
        </div>
      </Col>
      {this.state.uncategorised &&
        (<Col lg={6} md={6} sm={6} xs={6}>
      <Panel header="Uncategorised">
        {Alltodos.map((todo, i) => {
          uncategorised = (todo.category == "uncategorised")? uncategorised+1: uncategorised;
          return (todo.category == "uncategorised")? (
            <span key={i}>
              <h4> <TodoItem todo={todo}/> </h4>
              <hr/>
            </span>) : ((i+1 == Alltodos.length && uncategorised == 0)&&(<span>No uncategorised emails found.<hr/></span>))

        })}
      </Panel>

    </Col>)}
      </div>
    )
  }
}
export default Footer;
/*<Button onClick={this._clearCompleted}>Clear Completed</Button>*/
