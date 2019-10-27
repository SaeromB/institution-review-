import React, {Component} from 'react';
import Main from './View/Main/Main';
// import Review from './Components/Review/Review';
// import ReviewList from './Components/Review/ReviewList';
import ReviewDetail from './View/Main/ReviewDetail';

class App extends Component {
  render() {
    return(
      <div>
        <Main/>
        <ReviewDetail/>
      </div>
    )
  }
}

export default App;
