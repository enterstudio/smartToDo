import React from 'react';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import createMemoryHistory from 'history/lib/createMemoryHistory';
import {Router, Route, IndexRoute} from 'react-router';
import Template from './core/Template.jsx';
import Home from './core/Home.jsx';
import Hello from './core/HelloWorld.jsx';

var history;
if (typeof(window) !== 'undefined') {
 history = createBrowserHistory();

} else {
  history = createMemoryHistory();
}

export default(props) => {
  return (
    <Router history={history}>
      <Route path="/" component={Template}>
        <IndexRoute component={Home}/>
        <Route path="/hello" component={Hello}/>
      </Route>
    </Router>
  );
}
