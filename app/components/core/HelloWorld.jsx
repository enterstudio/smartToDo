import React from 'react';
import UserStore from './../../stores/UserStore.jsx';

class HelloWorld extends React.Component {
  constructor(props, context){
    super(props, context);
    this.history = props.history;
    console.log(props);
    if(props.location.query)
      UserStore.fetchUser(props.location.query.code);
    this._onChange = this._onChange.bind( this );
  }
  componentWillMount() {
      UserStore.onChange(this._onChange);
    }
    componentWillUnmount() {
      UserStore.removeChangeListener(this._onChange);
    }
    _onChange() {
      //route to home
      this.history.replaceState(null, '/');
    }

  render(){

    return (
      <div>
        <h1>Loading ...</h1>
      </div>

      )
    }
  }
  export default HelloWorld;
