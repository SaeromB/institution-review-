import React from 'react';
import { Grid } from '@material-ui/core';
import {GlobalStyle} from '../GlobalStyle/GlobalStyle';
import * as S from './HwHeaderStyle';
import school from '../Image/School/school.png'

const HwHeader = () => {
  return(
    <>
    <GlobalStyle/>
    <S.HwHeader>
      <S.Container>
        <Grid 
          container 
          spacing={2}
          direction='row'
          justify='center'
          >
        {/* <Grid item xs={4} >
        <S.SchoolLogo>
          <img src={school} alt={school}/>
        </S.SchoolLogo>
        </Grid> */}
        <Grid item xs={4}>
        <S.Title>대치동 학원알려드림</S.Title>
        </Grid>
        </Grid>
      </S.Container>
    </S.HwHeader>
    </>
  )
}

export default HwHeader;

