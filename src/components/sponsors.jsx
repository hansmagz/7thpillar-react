import React from 'react';
import { Grid, Typography, Box, Container } from '@mui/material';
import '../styles/styles.css'
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
// import Microsoft365 from '../assets/Microsoft365.png';
import Zoom from '../assets/Zoom.png';
import DICT from '../assets/DICT.png';
import Microsoft from '../assets/Microsoft.png';
import Teams from '../assets/Teams.png';
import PLDT from '../assets/PLDT.png';
import Starlink from '../assets/Starlink.png';
import GCP from '../assets/GCP.png';
import AWS from '../assets/AWS.png';
import AWS2 from '../assets/AWS2.png';
import Azure from '../assets/Azure.png';
import Bicsi from '../assets/Bicsi.png';
import Apollo from '../assets/Apollo.png';
import Cliqbux from '../assets/Cliqbux.png';
// import GoDaddy from '../assets/GoDaddy.png';
import CISCO from '../assets/CISCO.png';
import GuardDuty from '../assets/GuardDuty.png';
import Sumologic from '../assets/Sumologic.png';
import Splunk from '../assets/Splunk.png';
import Datadog from '../assets/Datadog.png';
import Crowdstrike from '../assets/Crowdstrike.png';
import Darktrace from '../assets/Darktrace.png';
import NewRelic from '../assets/NewRelic.png';
import PaloAlto from '../assets/PaloAlto.png';
import TrendMicro from '../assets/TrendMicro.png';
import Yubico from '../assets/Yubico.png';
import Zscaler from '../assets/Zscaler.png';
import Cloudcheckr from '../assets/Cloudcheckr.png';
import Netapp from '../assets/Netapp.png';
import Spot from '../assets/Spot.png';
import Bitdefender from '../assets/Bitdefender.png';
import Sentinelone from '../assets/Sentinelone.png';
import Marquee from "react-fast-marquee";

const Section = () => {
  return (
    <>
      <Grid container
        // style={{ marginTop: '4em', marginBottom: '4em' }}
        bgcolor={'#E3C263'}
        // px={{ xs: '2em', md: '10em' }}
        // spacing={{ xs: 4 }}
        py={'5em'}
      // justifyContent="space-between"

      >
        <Grid container item alignItems={'center'} marginInline={{lg:'4.3em', md:'2.5em', sm:'0.7em', xs:'0.7em'}}>
          <Typography variant="h3" fontWeight={700} mr={2}>
            We are a CUSTOMER of
          </Typography>
          <img src={AWS2} height={'70px'}></img>
        </Grid>
        <Grid container item justifyContent="center" mt={4}>
          <Typography fontSize={50} fontWeight={700}>
            TRUSTED BY
          </Typography>
        </Grid>
        <Marquee autoFill={'true'} pauseOnClick={'true'} speed={150}>
          <img src={DICT} height={'200px'} style={{ marginRight: '4em' }}></img>
          <img src={NashBund} height={'200px'} style={{ marginRight: '4em' }}></img>
          <img src={R2} height={'200px'} style={{ marginRight: '4em' }}></img>
          <img src={TARA} height={'200px'} style={{ marginRight: '4em' }}></img>
          <img src={JMMR2} height={'200px'} style={{ marginRight: '4em' }}></img>
          <img src={MP} height={'200px'} style={{ marginRight: '4em' }}></img>
          <img src={Bigo} height={'200px'} style={{ marginRight: '4em' }}></img>
          <img src={PestScience} height={'200px'} style={{ marginRight: '4em' }}></img>
          <img src={Mabalacat} height={'200px'} style={{ marginRight: '4em' }}></img>
          <img src={Bataan} height={'200px'} style={{ marginRight: '4em' }}></img>
        </Marquee>
        <Grid container item justifyContent="center" mt={6}>
          <Typography fontSize={{md:50, sm: 40, xs: 30}} fontWeight={700}>
            COLLABORATION PARTNERS
          </Typography>
        </Grid>
        <Marquee autoFill={'true'} pauseOnClick={'true'} speed={150} direction='right'>
          <img src={Zoom} height={'200px'} style={{ marginRight: '4em' }}></img>
          <img src={Microsoft} height={'200px'} style={{ marginRight: '4em' }}></img>
          <img src={Teams} height={'200px'} style={{ marginRight: '4em' }}></img>
          <img src={PLDT} height={'200px'} style={{ marginRight: '4em' }}></img>
          <img src={Starlink} height={'200px'} style={{ marginRight: '4em' }}></img>
          <img src={GCP} height={'200px'} style={{ marginRight: '4em' }}></img>
          <img src={AWS} height={'200px'} style={{ marginRight: '4em' }}></img>
          <img src={Azure} height={'200px'} style={{ marginRight: '4em' }}></img>
          <img src={Bicsi} height={'200px'} style={{ marginRight: '4em' }}></img>
          <img src={Apollo} height={'200px'} style={{ marginRight: '4em' }}></img>
          <img src={Cliqbux} height={'200px'} style={{ marginRight: '4em' }}></img>
        </Marquee>
        <Grid container item justifyContent="center" mt={6}>
          <Typography fontSize={{md:50, sm: 40, xs: 30}} fontWeight={700}>
            SECURITY SOLUTIONS
          </Typography>
        </Grid>
        <Marquee autoFill={'true'} pauseOnClick={'true'} speed={150}>
          <img src={CISCO} height={'200px'} style={{ marginRight: '4em' }}></img>
          <img src={GuardDuty} height={'200px'} style={{ marginRight: '4em' }}></img>
          <img src={Sumologic} height={'200px'} style={{ marginRight: '4em' }}></img>
          <img src={Splunk} height={'200px'} style={{ marginRight: '4em' }}></img>
          <img src={Datadog} height={'200px'} style={{ marginRight: '4em' }}></img>
          <img src={Crowdstrike} height={'200px'} style={{ marginRight: '4em' }}></img>
          <img src={Darktrace} height={'200px'} style={{ marginRight: '4em' }}></img>
          <img src={NewRelic} height={'200px'} style={{ marginRight: '4em' }}></img>
          <img src={PaloAlto} height={'200px'} style={{ marginRight: '4em' }}></img>
          <img src={TrendMicro} height={'200px'} style={{ marginRight: '4em' }}></img>
          <img src={Yubico} height={'200px'} style={{ marginRight: '4em' }}></img>
          <img src={Zscaler} height={'200px'} style={{ marginRight: '4em' }}></img>
          <img src={Cloudcheckr} height={'200px'} style={{ marginRight: '4em' }}></img>
          <img src={Netapp} height={'200px'} style={{ marginRight: '4em' }}></img>
          <img src={Spot} height={'200px'} style={{ marginRight: '4em' }}></img>
          <img src={Bitdefender} height={'200px'} style={{ marginRight: '4em' }}></img>
          <img src={Sentinelone} height={'200px'} style={{ marginRight: '4em' }}></img>
        </Marquee>
        {/* <Grid container item justifyContent="space-between" spacing={{xs:4, md:0}}>
          <Grid item xs={6} md={1.5}>
            <img src={AWS} width={'100%'}></img>
          </Grid>
          <Grid item xs={6} md={1.5}>
            <img src={ReactImg} width={'100%'}></img>
          </Grid>
          <Grid item xs={6} md={1.5}>
            <img src={Samsung} width={'100%'}></img>
          </Grid>
          <Grid item xs={6} md={1.5}>
            <img src={Apple} width={'100%'}></img>
          </Grid>
          <Grid item xs={6} md={1.5}>
            <img src={Kotlin} width={'100%'}></img>
          </Grid>
          <Grid item xs={6} md={1.5}>
            <img src={Swift} width={'100%'}></img>
          </Grid>
          <Grid item xs={6} md={1.5}>
            <img src={Zoom} width={'100%'}></img>
          </Grid>
        </Grid> */}
      </Grid>
    </>
  );
};

export default Section;