import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import Image from '../assets/logo4.png';
import '../styles/styles.css'

const Footer = () => {
  // const date = new Date().getFullYear();

  return (
    <Box sx={{ flexGrow: 1 }} className='footerContainer'>
      <Container>
        <Grid container mt={1}>
          <Grid container item spacing={2} alignItems="center">
            <Grid item>
              <img src={Image} height={'100px'}></img>
            </Grid>
            <Grid item>
              <Typography>
                PSC Bldg 2410 Gen Belarmino St., Brgy Bangkal
              </Typography>
              <Typography>
                Makati City
              </Typography>
              <Typography>
                +02 8334 2616
              </Typography>
              <Typography>
                info@seventh-pillar.com
              </Typography>
              <Typography>
                www.seventh-pillar.com
              </Typography>
            </Grid>
          </Grid>
          {/* <hr style={{height:'2px'}}></hr> */}
          <Box bgcolor={'#212121'} width={'100%'} height={'2px'} my={2}>

          </Box>
          <Grid container item>
            <Typography className='footerText'>
              Copyright © 2023 7th Pillar. All rights reserved
              {/* <Link href="#" target="_blank" underline="none">
              AppSeed
            </Link> */}
            </Typography>
          </Grid>
        </Grid>
      </Container>
      {/* <Typography className='footerDate'>Open-Source Sample - Buit with MUI</Typography> */}
    </Box>
  );
};

export default Footer;