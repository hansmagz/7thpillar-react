import React from 'react';
import { Grid, Typography, Box, Container } from '@mui/material';
// import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
// import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
// import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import ComputerIcon from '@mui/icons-material/Computer';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import CloudIcon from '@mui/icons-material/Cloud';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import BG from '../assets/BG3.png';
import '../styles/styles.css'

const Section = () => {
  const sectionItems = [
    {
      id: 1,
      icon: <CurrencyBitcoinIcon sx={{ fontSize: 100, color: '#E3C263', transition: 'color 0.3s ease' }} className='sectionGridLogo' />,
      sentence:
        'Blockchain',
    },
    {
      id: 2,
      icon: <ComputerIcon sx={{ fontSize: 100, color: '#E3C263', transition: 'color 0.3s ease' }} className='sectionGridLogo' />,
      sentence:
        'Fintech',
    },
    {
      id: 3,
      icon: <DeveloperBoardIcon sx={{ fontSize: 100, color: '#E3C263', transition: 'color 0.3s ease' }} className='sectionGridLogo' />,
      sentence: 'ERP Systems',
    },
    {
      id: 4,
      icon: <EqualizerIcon sx={{ fontSize: 100, color: '#E3C263', transition: 'color 0.3s ease' }} className='sectionGridLogo' />,
      sentence: 'Data & Analytics',
    },
    {
      id: 5,
      icon: <CloudIcon sx={{ fontSize: 100, color: '#E3C263', transition: 'color 0.3s ease' }} className='sectionGridLogo' />,
      sentence: 'Cloud Operations',
    },
    {
      id: 6,
      icon: <CloudDoneIcon sx={{ fontSize: 100, color: '#E3C263', transition: 'color 0.3s ease' }} className='sectionGridLogo' />,
      sentence: 'Cloud Cost Optimization',
    }
  ];
  return (
    <>
      <Container maxWidth="xl" className='services'>
        <Grid container style={{ marginTop: '4em', marginBottom: '4em' }}>
          <Grid container item justifyContent="center">
            <Typography variant="h3" fontWeight={700} className='title'>
              Offered Services
            </Typography>
          </Grid>
          <Grid container item>
            <Box sx={{ flexGrow: 1, minHeight: '400px' }}>
              <Grid container className='sectionGridContainer'>
                {sectionItems.map((item) => (
                  <Grid
                    container
                    item
                    xs={12}
                    md={3.5}
                    minHeight={300}
                    key={item.id}
                    alignItems="center"
                    justifyContent="center"
                    className='sectionGridItem'
                  >
                    <Grid item>
                      {item.icon}
                      <Typography variant="h4" fontWeight={'bold'}>{item.sentence}</Typography>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Section;