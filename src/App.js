import React , {useState} from 'react';
import Register from './register.js'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { Switch} from 'react-router'
import Dashboard from './Dashboard.js'
import Login from './login.js';
import LocationSearchInput from './Places.js'
import SearchTest from './SerachTest'

function App() {
  return (
    <Router>
    <Switch>
      <Route exact={true} path="/" component={Login}></Route>
      <Route exact={true} path="/places" component={LocationSearchInput}></Route>
      <Route path="/register" component={Register}></Route>
      <Route path="/home" component={Dashboard}></Route>
      <Route path="/search" component={SearchTest}></Route>
    </Switch>
    </Router>
  );
}
export default App;
