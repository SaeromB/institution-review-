import React, {Component} from 'react';
import * as S from './CardStyle';
import hwlogo from '../Image/Hwlogo/hwlogo.png';
import star from '../Image/Star/star.svg';

const CardTwo = () => {
  return(
    <S.CardContainer>
      <S.Wrapper>
        <S.Row>
          <S.Column>
            <S.LogoImage>
            <img src={hwlogo} alt={'hwlogo'}/>
            </S.LogoImage>
          </S.Column>
          <S.DoubleColumn>
            <S.Row>
            <S.HogwonName>이지영어학원</S.HogwonName>
            </S.Row>
            <S.Wrapper>
            <S.HogwonHashtag>#영어</S.HogwonHashtag>
            <S.HogwonHashtag>#국어</S.HogwonHashtag>
            </S.Wrapper>
          </S.DoubleColumn>
        </S.Row>
      </S.Wrapper>
      
      <S.Wrapper>
        <S.Row>
          <S.Column>
            <S.Rating>
            <img src={star} alt={'star'}/>
            <span>4.3</span>
            {/* <span>(440)</span> */}
            </S.Rating>
          </S.Column>
        </S.Row>
      </S.Wrapper>
    </S.CardContainer>
    
  );
};



export default CardTwo;