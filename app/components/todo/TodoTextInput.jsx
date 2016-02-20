import React from 'react';


class TodoTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.value = this.props.value || '';
    this._save = this._save.bind(this);
    this._onChange = this._onChange.bind(this);
    console.log("TD input called");
  }

  _save() {
    console.log("Test");
    this.props.onSave(this.state.value);
    this.setState({value: ''});
  }

  _onChange(event){
    console.log(event);
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <input
          value={this.state.value}
          autoFocus={true}
          onChange={this._onChange}
          onBlur={this._save}
        />
    )
  }
}
export default TodoTextInput;
