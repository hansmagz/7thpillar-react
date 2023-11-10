import React from 'react';
import { Grid, Typography } from '@mui/material';
import Reveal from '../components/reveal';
import '../styles/styles.css'

const Section = () => {
  return (
    <>
      <Grid container
        // style={{ marginTop: '4em', marginBottom: '4em' }}
        bgcolor={'#E3C263'}
        px={{ xs: '2em', md: '10em', lg: '20em' }}
        // spacing={4}
        py={'10em'}
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h3" fontWeight={700} pb={4}>
          Why Choose Us?
        </Typography>

        <Reveal>
          <Grid container item pb={8} alignItems={'center'}>
            <Grid item xs={12} md={4}>
              <Typography variant="h4" fontWeight={700}>Expertise</Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h5">Our team of experienced professionals brings a wealth of knowledge in both hardware and software, ensuring that your technology needs are met with precision.</Typography>
            </Grid>
          </Grid>
        </Reveal>

        <Reveal>
          <Grid container item pb={8} alignItems={'center'}>
            <Grid item xs={12} md={4}>
              <Typography variant="h4" fontWeight={700}>End-to-End Solutions</Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h5">We offer a complete suite of services, from designing and deploying robust hardware systems to developing custom software solutions that enhance efficiency and productivity.</Typography>
            </Grid>
          </Grid>
        </Reveal>

        <Reveal>
          <Grid container item pb={8} alignItems={'center'}>
            <Grid item xs={12} md={4}>
              <Typography variant="h4" fontWeight={700}>Client-Centric Approach</Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h5">Your success is our top priority. We work closely with you to understand your goals and challenges, tailoring solutions that deliver real results.</Typography>
            </Grid>
          </Grid>
        </Reveal>

        <Reveal>
          <Grid container item pb={8} alignItems={'center'}>
            <Grid item xs={12} md={4}>
              <Typography variant="h4" fontWeight={700}>Innovation</Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h5">We stay at the forefront of technology trends and continuously invest in research and development to provide you with the latest and most innovative solutions.</Typography>
            </Grid>
          </Grid>
        </Reveal>

        <Reveal>
          <Grid container item alignItems={'center'}>
            <Grid item xs={12} md={4}>
              <Typography variant="h4" fontWeight={700}>Quality Assurance</Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h5">Our commitment to quality is unwavering. We rigorously test and refine our products and services to meet the highest standards.</Typography>
            </Grid>
          </Grid>
        </Reveal>
      </Grid>
    </>
  );
};

export default Section;