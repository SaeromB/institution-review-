import React from 'react';
import { Grid } from '@material-ui/core';

import * as S from './MainStyle';
import Header from '../../Components/Header/Header'
import MainCard from '../../Components/Card/MainCard'

const Main = () => {
  return(
    <>
    <Header/>
     <section>
       <S.Container>
        <h1>학원 10개</h1>
        <Grid
          container
          spacing={2}
          direction='row'
          justify='center'
          alignItems='center'
        >
          <Grid item xs={12} md={6}>
            <MainCard/>
          </Grid>
          <Grid item xs={12} md={6}>
            <MainCard/>
          </Grid>
        </Grid>
       </S.Container>
     </section>
    </>
  );
}

export default Main;