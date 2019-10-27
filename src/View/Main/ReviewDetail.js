import React, {Component} from 'react';
import Main from './Main';
import Header from '../../Components/Header/Header';
import Review from '../../Components/Review/Review';
import ReviewList from '../../Components/Review/ReviewList';


class ReviewDetail extends Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
      currentReview: {text: '', key:''},
    }
  }

  deleteReview = key => {
    const filteredReviews = this.state.reviews.filter(review => {
      return review.key !== key
    })
    this.setState({
    reviews: filteredReviews,
  })

  }
  handleInput = e => {
    const reviewText = e.target.value
    const currentReview = {text: reviewText, key: Date.now()}
      this.setState({
        currentReview,
      })
  }
  addReview = e => {
    e.preventDefault()
    const newReview = this.state.currentReview
    if (newReview.text !== '') {
      console.log(newReview)
      const reviews = [...this.state.reviews, newReview]
      this.setState({
        reviews: reviews,
        currentReview: {text: '', key: ''},
      })
    }
  }
  render() {
    return(
      <div>
        <Main/>
        <Review
         addReview={this.addReview}
         inputElement={this.inputElement}
         handleInput={this.handleInput}
         currentReview={this.state.currentReview}
        />
        <ReviewList entries={this.state.reviews} deleteReview={this.deleteReview}/>
      </div>
    )
  }
}

export default ReviewDetail;
