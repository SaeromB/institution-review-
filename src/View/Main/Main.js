import React from 'react';
import { Grid } from '@material-ui/core';

import * as S from './MainStyle';
import Header from '../../Components/Header/Header';
import MainCard from '../../Components/Card/MainCard';
import CardOne from '../../Components/Card/CardOne';
import CardTwo from '../../Components/Card/CardTwo';
import CardThree from '../../Components/Card/CardThree';

const Main = () => {
  return(
    <>
    <Header/>
     <section>
       <S.Container>
        <Grid
          container
          spacing={0}
          direction='row'
          justify='center'
          alignItems='center'
        >
          <Grid item xs={12} md={6}>
            <MainCard/>
          </Grid>
          <Grid item xs={12} md={6}>
            <CardOne/>
          </Grid>
          <Grid item xs={12} md={6}>
            <CardTwo/>
          </Grid>
          <Grid item xs={12} md={6}>
            <CardThree/>
          </Grid>
        </Grid>
       </S.Container>
     </section>
    </>
  );
}

export default Main;