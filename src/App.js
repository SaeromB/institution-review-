import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Main from './View/Main/Main';
import ReviewDetail from './View/Main/ReviewDetail';

class App extends Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/ReviewDetail" component={ReviewDetail}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
