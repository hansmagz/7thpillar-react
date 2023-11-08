import React from 'react';
import { Grid, Typography } from '@mui/material';
import '../styles/styles.css'
import AWS from '../assets/AWS.png';
import ReactImg from '../assets/React.png';
import Samsung from '../assets/Samsung.png';
import Apple from '../assets/Apple3.png';
import Kotlin from '../assets/Kotlin.png';
import Swift from '../assets/Swift.png';
import Zoom from '../assets/Zoom.png';

const Section = () => {
  return (
    <>
      <Grid container
        // style={{ marginTop: '4em', marginBottom: '4em' }}
        bgcolor={'#E3C263'}
        px={{ xs: '2em', md: '10em' }}
        // spacing={{ xs: 4 }}
        py={'5em'}
        // justifyContent="space-between"
        
      >
        <Grid container item justifyContent="center">
          <Typography variant="h3" fontWeight={700} pb={4}>
            Our Partners
          </Typography>
        </Grid>
        <Grid container item justifyContent="space-between" spacing={{xs:4, sm:0}}>
          <Grid item xs={6} md={1.5}>
            <img src={AWS} width={'100%'}></img>
          </Grid>
          <Grid item xs={6} md={1.5}>
            <img src={ReactImg} width={'100%'}></img>
          </Grid>
          <Grid item xs={6} md={1.5}>
            <img src={Samsung} width={'100%'}></img>
          </Grid>
          <Grid item xs={6} md={1.5}>
            <img src={Apple} width={'100%'}></img>
          </Grid>
          <Grid item xs={6} md={1.5}>
            <img src={Kotlin} width={'100%'}></img>
          </Grid>
          <Grid item xs={6} md={1.5}>
            <img src={Swift} width={'100%'}></img>
          </Grid>
          <Grid item xs={6} md={1.5}>
            <img src={Zoom} width={'100%'}></img>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Section;