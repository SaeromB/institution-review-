import React, { Component } from 'react';
import Header from '../Header/Header';
import * as S from '../Review/ReviewStyle';

class Reveiw extends Component {
  render() {
    return(
      <div>
        <S.InputContainer>
        <S.InputWrapper>
        <form onSubmit={this.props.addReview}>
          <input
            placeholder = '여기학원 어때?'
            ref={this.props.inputElement}
            value={this.props.currentReview.text}
            onChange={this.props.handleInput}
          />
          {/* <button type='submit'>추가</button> */}
        </form>
        </S.InputWrapper>
        </S.InputContainer>
      </div>
    )
  }
}

export default Reveiw;