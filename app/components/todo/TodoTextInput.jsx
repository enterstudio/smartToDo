import React from 'react';

class TodoTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.value = this.props.value || '';
    this._save = this._save.bind(this);
    this._onChange = this._onChange.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
  }

  _onKeyDown(event) {
     if (event.keyCode === 13) {
       this._save();
     }
   }


  _save() {
    console.log("asda");
    this.props.onSave(this.state.value);
    this.setState({value: ''});
  }

  _onChange(event) {
    this.setState({value: event.target.value});

  }

  render() {
    return (
      <input className="textInput" value={this.state.value} onKeyDown={this._onKeyDown} onChange={this._onChange} onBlur={this._save} autofocus={this.props.focus}/>
    )
  }
}
export default TodoTextInput;
