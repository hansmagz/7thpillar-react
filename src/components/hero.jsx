import React from 'react';
import { Stack, Typography, Button, Box, Grid } from '@mui/material';
import Logo from '../assets/logo2.png';
import Reveal from '../components/reveal';
import '../styles/styles.css'

const Hero = () => {
  return (
    <Box className='heroBox'>
      <Stack alignItems="center" paddingX={4}>
        <Reveal textAlign={'center'}>
          <Grid
            container
            justifyContent="center"
          >
            <Grid item xs={12} md={6}>
              <img src={Logo} width={'40%'}></img>
            </Grid>
          </Grid>
        </Reveal>
        {/* <Reveal>
          <Typography variant="h2" fontWeight={700} className='title' mt={5}>
            Your partner in transformative technology
          </Typography>
        </Reveal>
        <Reveal>
          <Typography variant="h6" className='subtitle'>
          Unleashing evolution and delivering excellence
          </Typography>
        </Reveal> */}
        <Reveal>
          <Grid container item alignItems={'center'}>
            <Grid item xs={12} md={12}>
              <Typography variant="h2" fontWeight={700} className='title' mt={5} textAlign={'center'}>
                Your partner in transformative technology
              </Typography>
            </Grid>
            <Grid item xs={12} md={12} textAlign={'center'}>
              <Typography variant="h6" className='subtitle'>
                Unleashing evolution and delivering excellence
              </Typography>
            </Grid>
          </Grid>
        </Reveal>
        <Reveal>
          <Button
            variant="outlined"
            color="primary"
            sx={{ width: '200px', fontSize: '30px' }}
            href="mailto:info@seventh-pillar.com"
          >
            INQUIRE
          </Button>
        </Reveal>
      </Stack>
    </Box>
  );
};

export default Hero;