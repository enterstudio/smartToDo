import React from 'react';
import { Grid, Row, Col, Button} from 'react-bootstrap';


class TodoTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.value = this.props.value || '';
  }

  render() {
    var title = this.props.value;
    return (
      <input
          value={this.state.value}
          autoFocus={true}
        />
    )
  }
}
export default TodoTextInput;
