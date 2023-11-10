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
      {/* <Grid container spacing={5} className='gridContainer'>
        <Grid item xs={12} md={7}>
          <Typography variant="h3" fontWeight={700} className='title'>
            Let's scale your business
          </Typography>
          <Typography variant="h6" className='subtitle'>
            Hire professionals who will help your business make 10X your
            previous income. With over 5years experience in Marketing & Business
            strategy, we are your best client.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: '200px', fontSize: '16px' }}
          >
            HIRE US
          </Button>
        </Grid>
        <Grid item xs={12} md={5}>
          <img src={myteam} alt="My Team" className='largeImage' />
        </Grid>
      </Grid> */}

    </Box>
  );
};

export default Hero;