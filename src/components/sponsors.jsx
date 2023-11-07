import React from 'react';
import { Grid } from '@mui/material';
import '../styles/styles.css'

const Section = () => {
  return (
    <>
      <Grid container
        // style={{ marginTop: '4em', marginBottom: '4em' }}
        bgcolor={'#E3C263'}
        px={'10em'}
        // spacing={4}
        py={'5em'}
        justifyContent="space-between"
      >
        <Grid item md={1.5}>
          <img src='src/assets/AWS.png' width={'100%'}></img>
        </Grid>
        <Grid item md={1.5}>
          <img src='src/assets/React.png' width={'100%'}></img>
        </Grid>
        <Grid item md={1.5}>
          <img src='src/assets/Samsung.png' width={'100%'}></img>
        </Grid>
        <Grid item md={1.5}>
          <img src='src/assets/Apple3.png' width={'100%'}></img>
        </Grid>
        <Grid item md={1.5}>
          <img src='src/assets/Kotlin.png' width={'100%'}></img>
        </Grid>
        <Grid item md={1.5}>
          <img src='src/assets/Swift.png' width={'100%'}></img>
        </Grid>
        <Grid item md={1.5}>
          <img src='src/assets/Zoom.png' width={'100%'}></img>
        </Grid>
      </Grid>
    </>
  );
};

export default Section;