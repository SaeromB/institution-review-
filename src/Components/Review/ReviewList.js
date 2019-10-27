import React, {Component} from 'react';

class ReviewList extends Component {
  createReviews = review => {
    return(
      <li key={review.key} 
        onClick={() => this.props.deleteReview(review.key)}>
        {review.text}
      </li>
    )
  }
 
  render() {
    const reviewEntries = this.props.entries
    const listReviews = reviewEntries.map(this.createReviews)
    return <ul>{listReviews}</ul>
  }
}

export default ReviewList;