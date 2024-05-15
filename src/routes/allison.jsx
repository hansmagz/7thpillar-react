import React from 'react';
import { Grid, Typography } from '@mui/material';
import Reveal from '../components/reveal';
import '../styles/styles.css'

const About = () => {
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
      >
        <Grid item md={9} mb={12}>
          <Reveal>
            <Typography variant="h2" fontWeight={700} color={'white'}>Allison M. Bundalian</Typography>
            <Typography variant="h4" fontWeight={700} color={'white'} mb={4}>Project Manager</Typography>
            <Typography variant="h4" fontWeight={700} color={'#E3C263'}>amb@seventh-pillar.com</Typography>
            <Typography variant="h4" fontWeight={700} color={'#E3C263'}>+02 8334 2616</Typography>
            <Typography variant="h4" fontWeight={700} color={'#E3C263'}>+63 956 123 0033</Typography>
            {/* <Typography variant="h6" color={'#E3C263'}>Welcome to 7th Pillar, where innovation meets excellence in technological solutions. Established in 2023, we are a dynamic and forward-thinking company that provides cutting-edge start-to-end software and hardware solutions.</Typography> */}
          </Reveal>
        </Grid>
        {/* <Grid item md={9} mb={12}>
          <Reveal>
            <Typography variant="h2" fontWeight={700} color={'white'} mb={4}>Mission</Typography>
            <Typography variant="h6" color={'#E3C263'}>Our mission is to bridge the gap between hardware and software, providing seamless integration and unparalleled support. We empower businesses to thrive in the digital age by offering cloud-based solutions that cater to their unique needs.</Typography>
          </Reveal>
        </Grid>
        <Grid item md={9}>
          <Reveal>
            <Typography variant="h2" fontWeight={700} color={'white'} mb={4}>Vision</Typography>
            <Typography variant="h6" color={'#E3C263'}>To transform the way companies operate through cloud innovation and enable our clients to thrive in an ever-evolving technological landscape with a commitment to excellence, sustainable growth, and unwavering dedication to our clients.</Typography>
          </Reveal>
        </Grid> */}
      </Grid>
    </>
  );
};

export default About;