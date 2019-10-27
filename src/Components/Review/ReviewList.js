import React, {Component} from 'react';

class ReviewList extends Component {
  createReviews = review => {
    return(
      <ul key={review.key} 
        onClick={() => this.props.deleteReview(review.key)}>
        {review.text}
      </ul>
    )
  }
 
  render() {
    const reviewEntries = this.props.entries
    const listReviews = reviewEntries.map(this.createReviews)
    return <ul>{listReviews}</ul>
  }
}

export default ReviewList;