import React from 'react';
import * as S from './HeaderStyle';
import { GlobalStyle } from '../GlobalStyle/GlobalStyle';
import school from '../Image/School/school.png';

const Header = () => {
  return (
    <>
    <GlobalStyle/>
    <S.Header>
      <S.HeaderContainer>
        <S.Row>
          <S.Column>
          <S.SchoolLogo>
          <img src={school} alt={'school'}/>
          </S.SchoolLogo>
          </S.Column>
          <S.DoubleColumn>
          <S.Title>대치동 학원 알려드림</S.Title>
          </S.DoubleColumn>
        </S.Row>
      </S.HeaderContainer>
    </S.Header>
    </>
  );
};

export default Header;


