import React, {Component} from 'react';
import Reveiw from '../Review';

class ViewReview extends Component {
  render() {
    return(
      <div>
        <Reveiw addReview={this.addReview}/>
      </div>
    )
  }
}

export default ViewReview;