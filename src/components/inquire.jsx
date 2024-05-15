import React from 'react';
import { Grid, Typography, Stack, Link } from '@mui/material';
import Reveal from '../components/reveal';
import DICT from '../assets/DICT.png';
import NashBund from '../assets/NashBund.png';
import TARA from '../assets/TARA.png';
import R2 from '../assets/R2.png';
import RedSpiderSecurity from '../assets/RedSpiderSecurity.png';
import JMMR2 from '../assets/JMMR2.png';
import MP from '../assets/MP.png';
import Bigo from '../assets/Bigo.png';
import PestScience from '../assets/PestScience.png';
import Mabalacat from '../assets/Mabalacat.png';
import Bataan from '../assets/Bataan.png';
import Location from '../assets/location.svg';
import Telephone from '../assets/telephone.svg';
import Email from '../assets/email.svg';
import '../styles/styles.css'

const Section = () => {
  return (
    <>
      <Grid container
        // style={{ marginTop: '4em', marginBottom: '4em' }}
        bgcolor={'#E3C263'}
        px={{ xs: '2em', md: '10em' }}
        // spacing={4}
        py={'10em'}
        // justifyContent="space-between"
        // alignItems="center"
        spacing={4}
      // className='ready'
      >
        <Grid container item xs={12} sm={12} md={6} spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <Typography variant="h2" fontWeight={700}>TRUSTED BY</Typography>
          </Grid>
          <Grid item xs={2.4} sm={2.4} md={2.4}>
            <img src={MP} width={'100%'}></img>
          </Grid>
          <Grid item xs={2.4} sm={2.4} md={2.4}>
            <img src={DICT} width={'100%'}></img>
          </Grid>
          <Grid item xs={2.4} sm={2.4} md={2.4}>
            <img src={TARA} width={'100%'}></img>
          </Grid>
          <Grid item xs={2.4} sm={2.4} md={2.4}>
            <img src={R2} width={'100%'}></img>
          </Grid>
          <Grid item xs={2.4} sm={2.4} md={2.4}>
            <img src={JMMR2} width={'100%'}></img>
          </Grid>
          <Grid item xs={2.4} sm={2.4} md={2.4}>
            <img src={NashBund} width={'100%'}></img>
          </Grid>
          <Grid item xs={2.4} sm={2.4} md={2.4}>
            <img src={Bigo} width={'100%'}></img>
          </Grid>
          <Grid item xs={2.4} sm={2.4} md={2.4}>
            <img src={PestScience} width={'100%'}></img>
          </Grid>
          <Grid item xs={2.4} sm={2.4} md={2.4}>
            <img src={Mabalacat} width={'100%'}></img>
          </Grid>
          <Grid item xs={2.4} sm={2.4} md={2.4}>
            <img src={Bataan} width={'100%'}></img>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Typography variant="h2" fontWeight={700}>How Can We Help?</Typography>
          <Link href="mailto:info@seventh-pillar.com">
            <Typography variant="h4" fontWeight={600} mt={3} color={'black'}>Contact Us</Typography>
          </Link>
          <Stack direction="row" spacing={1} mt={2}>
            <img src={Location} width={30}></img>
            <Typography fontSize={20} fontWeight={600}>PSC Bldg 2410 Gen Belarmino St., Brgy Bangkal, Makati City</Typography>
          </Stack>
          <Stack direction="row" spacing={1} mt={1}>
            <img src={Telephone} width={30}></img>
            <Typography fontSize={20} fontWeight={600}>+02 8334 2616</Typography>
          </Stack>
          <Link href="mailto:info@seventh-pillar.com">
            <Stack direction="row" spacing={1} mt={1}>
              <img src={Email} width={30}></img>
              <Typography fontSize={20} fontWeight={600} color={'black'}>info@seventh-pillar.com</Typography>
            </Stack>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default Section;