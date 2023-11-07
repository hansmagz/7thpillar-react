import React from 'react';
import { Grid, Stack, Typography, Button, Box } from '@mui/material';
import myteam from '../assets/BG1.png';
import '../styles/styles.css'

const Hero = () => {
  return (
    <Box className='heroBox'>
      <Stack alignItems="center" paddingX={4}>
        <Typography variant="h2" fontWeight={700} className='title'>
          Let's scale your business
        </Typography>
        <Typography variant="h6" className='subtitle'>
          Hire professionals who will help your business make 10X your
          previous income.<br/>With over 5years experience in Marketing & Business
          strategy, we are your best client.
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          sx={{ width: '200px', fontSize: '20px' }}
        >
          INQUIRE
        </Button>
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