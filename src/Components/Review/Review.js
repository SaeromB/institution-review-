import React, { Component } from 'react';
import * as S from './ReviewStyle';
import Header from '../Header/Header';

class Reveiw extends Component {
  render() {
    return(
      <div>
        <Header/>
          <form onSubmit={this.props.addReview}>
            <input placeholder = '학원리뷰를 적으세요'/>
            <button type='submit'>추가하기</button>
          </form>
      </div>
    )
  }
}

export default Reveiw;