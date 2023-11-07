import React from 'react';
import { Grid, Typography, Button, Box, Container } from '@mui/material';
// import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
// import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
// import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import ComputerIcon from '@mui/icons-material/Computer';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import CloudIcon from '@mui/icons-material/Cloud';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import '../styles/styles.css'

const Section = () => {
  const sectionItems = [
    {
      id: 1,
      icon: <CurrencyBitcoinIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence:
        'Blockchain',
    },
    {
      id: 2,
      icon: <ComputerIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence:
        'Fintech',
    },
    {
      id: 3,
      icon: <DeveloperBoardIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence: 'ERP Systems',
    },
    {
      id: 4,
      icon: <EqualizerIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence: 'Data & Analytics',
    },
    {
      id: 5,
      icon: <CloudIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence: 'Cloud Operations',
    },
    {
      id: 6,
      icon: <CloudDoneIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence: 'Cloud Cost Optimization',
    }
  ];
  return (
    <>
      <Grid container
        // style={{ marginTop: '4em', marginBottom: '4em' }}
        bgcolor={'#323332'}
        px={'10em'}
        // spacing={4}
        py={'10em'}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item md={9}>
          <Typography variant="h2" fontWeight={700} color={'white'}>Ready to Get Started?</Typography>
          <Typography variant="h6" color={'#E3C263'}>We’re on your side, doing what it takes to get the job done right from the first consultation to your daily operations.<br/>Contact us for a free quote.</Typography>
        </Grid>
        <Grid item md={3} textAlign={'center'}>
          <Button
            variant="outlined"
            color="primary"
            sx={{ width: '300px', fontSize: '24px' }}
          >
            Let's Talk
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Section;