import React from 'react';
import {Button} from 'react-bootstrap';
import TodoStore from "../../stores/TodoStore.jsx";

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {};
    this._clearCompleted = this._clearCompleted.bind(this);

  }

  _clearCompleted() {
    TodoStore.clearCompleted();
  }

  render() {
    var Alltodos = this.props.Alltodos;
    var total = Alltodos.length;

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
    var itemsLeftPhrase = itemsLeft === 1
      ? ' item '
      : ' items ';
    itemsLeftPhrase += 'left';

    return (
      <div>
        <span>
          <strong>
            {itemsLeft}
          </strong>
          {itemsLeftPhrase}
        </span>

      </div>
    )
  }
}
export default Footer;
/*<Button onClick={this._clearCompleted}>Clear Completed</Button>*/
