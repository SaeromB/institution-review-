import React, {Component} from 'react';
import Main from './View/Main/Main';
import Review from './Components/Review/Review';
import Header from './Components/Header/Header';

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {text: '', key:''},
    }
  }
  handleInput = e => {
    console.log('Hello Input')
  }
  addReview = () => {
    console.log('Hello Add Review')
  }
  render() {
    return(
      <div>
        <Main/>
        <Review addReview={this.addReview}/>
      </div>
    )
  }
}

export default App;
