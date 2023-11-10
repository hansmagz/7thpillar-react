import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import Reveal from '../components/reveal';
import '../styles/styles.css'

const Section = () => {
  return (
    <>
      <Grid container
        // style={{ marginTop: '4em', marginBottom: '4em' }}
        // bgcolor={'#323332'}
        px={{ xs: '2em', md: '10em' }}
        // spacing={4}
        py={'10em'}
        justifyContent="space-between"
        alignItems="center"
        className='ready'
      >
        <Grid item xs={12} md={9} mb={{ xs: '4em' }}>
          <Reveal>
            <Typography variant="h2" fontWeight={700} color={'white'}>Ready to Get Started?</Typography>
          </Reveal>
          <Reveal>
            <Typography variant="h6" color={'#E3C263'}>We’re on your side, doing what it takes to get the job done right from the first consultation to your daily operations.<br />Contact us for a free quote.</Typography>
          </Reveal>
        </Grid>
        <Grid item xs={12} md={3} textAlign={'center'}>
          <Reveal width='100%'>
            <Button
              variant="outlined"
              color="primary"
              sx={{ width: '300px', fontSize: '24px' }}
              href="mailto:info@seventh-pillar.com"
            >
              Let's Talk
            </Button>
          </Reveal>
        </Grid>
      </Grid>
    </>
  );
};

export default Section;