import React from 'react';
import { Grid, Typography, Box, Container, Fade } from '@mui/material';
// import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
// import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
// import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import ComputerIcon from '@mui/icons-material/Computer';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import CloudIcon from '@mui/icons-material/Cloud';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import EmojiObjects from '@mui/icons-material/EmojiObjects';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SecurityIcon from '@mui/icons-material/Security';
import Reveal from '../components/reveal';
import BG from '../assets/BG7.png';
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
        'Finance & Fintech',
    },
    {
      id: 3,
      icon: <DeveloperBoardIcon sx={{ fontSize: 100, color: '#E3C263', transition: 'color 0.3s ease' }} className='sectionGridLogo' />,
      sentence: 'ERP Systems',
    },
    {
      id: 4,
      icon: <EqualizerIcon sx={{ fontSize: 100, color: '#E3C263', transition: 'color 0.3s ease' }} className='sectionGridLogo' />,
      sentence: 'Business Intelligence Services',
    },
    {
      id: 5,
      icon: <CloudIcon sx={{ fontSize: 100, color: '#E3C263', transition: 'color 0.3s ease' }} className='sectionGridLogo' />,
      sentence: 'IAS',
    },
    {
      id: 6,
      icon: <CloudDoneIcon sx={{ fontSize: 100, color: '#E3C263', transition: 'color 0.3s ease' }} className='sectionGridLogo' />,
      sentence: 'Cloud Cost Optimization',
    },
    {
      id: 7,
      icon: <ApartmentIcon sx={{ fontSize: 100, color: '#E3C263', transition: 'color 0.3s ease' }} className='sectionGridLogo' />,
      sentence: 'Building Design Technology',
    },
    {
      id: 8,
      icon: <EmojiObjects sx={{ fontSize: 100, color: '#E3C263', transition: 'color 0.3s ease' }} className='sectionGridLogo' />,
      sentence: 'Generative AI',
    },
    {
      id: 9,
      icon: <SecurityIcon sx={{ fontSize: 100, color: '#E3C263', transition: 'color 0.3s ease' }} className='sectionGridLogo' />,
      sentence: 'Cyber Security',
    }
  ];
  return (
    <>
      <Container maxWidth="xl"
        // className='services'
        sx={{ backgroundImage: { xs: '', md: `url(${BG})` }, backgroundSize: 'cover', backgroundPosition: 'right', backgroundRepeat: 'no-repeat' }}
      >
        <Grid container style={{ marginTop: '4em', marginBottom: '4em' }}>
          <Grid container item marginInline={{lg:'4.3em', md:'2.5em', sm:'0.7em', xs:'0.7em'}}>
            <Typography variant="h3" fontWeight={700} className='title'>
              Professional Services
            </Typography>
          </Grid>
          <Grid container item>
            <Box sx={{ flexGrow: 1, minHeight: '400px' }}>
              <Grid container className='sectionGridContainer'>
                {sectionItems.map((item) => (
                  <Grid
                    container
                    item
                    key={item.id}
                    xs={12}
                    md={3.5}
                    margin={1.5}
                  >
                    <Reveal width='100%'>
                      <Grid
                        container
                        item
                        minHeight={300}
                        alignItems="center"
                        justifyContent="center"
                        className='sectionGridItem'
                      >
                        <Grid item>
                          {item.icon}
                          <Typography variant="h4" fontWeight={'bold'}>{item.sentence}</Typography>
                        </Grid>
                      </Grid>
                    </Reveal>
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