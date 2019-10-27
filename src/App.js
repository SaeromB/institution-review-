import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Main from './View/Main/Main';
import ReviewDetail from './View/Main/ReviewDetail';
import styled from 'styled-components';

class App extends Component {
  render() {
    return(
      <Router>
        <Link to="/"></Link>
      <Switch>
        <Route path exact path="/" component={Main}></Route>
        <Route path='/ReviewDetail' component={ReviewDetail}></Route>
      </Switch>
      <Link to="/ReviewDetail">
        <p>여기 학원 어때?</p>
      </Link>
      </Router>
    )
  }
}




export default App;
