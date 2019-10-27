import React, { Component } from 'react';
import * as S from './ReviewStyle';
import Header from '../Header/Header';

class Reveiw extends Component {
  render() {
    return(
      <div>
        <form onSubmit={this.props.addReview}>
          <input
            placeholder = '학원리뷰를 적으세요'
            ref={this.props.inputElement}
            value={this.props.currentReview.text}
            onChange={this.props.handleInput}
          />
          <button type='submit'>리뷰추가</button>
        </form>
      </div>
    )
  }
}

export default Reveiw;