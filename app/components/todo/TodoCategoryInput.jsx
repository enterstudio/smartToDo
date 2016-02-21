import React from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';


class TodoTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this._save = this._save.bind(this);
    this.state.category = this.capitalize(this.props.category);
    this._onChange = this._onChange.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
    this._onSelect = this._onSelect.bind(this);
    this.capitalize = this.capitalize.bind(this);
  }

 capitalize(s)
{
    return s[0].toUpperCase() + s.slice(1);
}

  _onKeyDown(event) {
     if (event.keyCode === 13) {
       this._save();
     }
   }

_onSelect(evt,eventKey){
  if (eventKey==1){
      this.setState({category: "Deadline"});
      this.props.editCategory("deadline");

  }
  else if (eventKey==2){
      this.setState({category: "Meeting"});
      this.props.editCategory("meeting");
  }
  else if (eventKey==3){
      this.setState({category: "Registration"});
      this.props.editCategory("registration");
  }
  else if (eventKey==4){
      this.setState({category: "Reminders"});
      this.props.editCategory("reminders");
  }
  else if (eventKey==5){
      this.setState({category: "Uncategorised"});
      this.props.editCategory("uncategorised");
  }
}

  _save() {
    this.props.onSave(this.state.value);
    this.setState({value: ''});
  }

  _onChange(event) {
    this.setState({value: event.target.value});

  }

  render() {
    return (

      <DropdownButton bsStyle="primary" title={this.state.category} id="Drop" onSelect={this._onSelect}>
       <MenuItem eventKey="1">Deadline</MenuItem>
       <MenuItem eventKey="2">Meeting</MenuItem>
       <MenuItem eventKey="3" >Registration</MenuItem>
      <MenuItem eventKey="4" >Reminders</MenuItem>
      <MenuItem eventKey="5" >Uncategorised</MenuItem>
     </DropdownButton>
    )
  }
}
export default TodoTextInput;
