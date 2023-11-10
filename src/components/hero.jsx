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
        <Reveal>
          <Typography variant="h2" fontWeight={700} className='title' mt={5}>
            Scale up your Business with us
          </Typography>
        </Reveal>
        <Reveal>
          <Typography variant="h6" className='subtitle'>
            We help businesses from start to finish. With over 5 years experience in Hardware & Software Solutions.
          </Typography>
        </Reveal>
        <Reveal>
          <Button
            variant="outlined"
            color="primary"
            sx={{ width: '200px', fontSize: '20px' }}
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