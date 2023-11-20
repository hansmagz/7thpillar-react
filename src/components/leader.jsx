import React from 'react';
import { Grid, Typography } from '@mui/material';
import Leader1 from '../assets/Leader1.jpg';
import Leader2 from '../assets/Leader2.jpg';
import Reveal from '../components/reveal';
import '../styles/styles.css'

const Section = () => {
  return (
    <>
      <Grid container
        // style={{ marginTop: '4em', marginBottom: '4em' }}
        // bgcolor={'#E3C263'}
        px={{ xs: '2em', md: '10em' }}
        // spacing={4}
        py={'10em'}
        justifyContent="space-between"
        alignItems="center"
      // className='ready'
      >
        <Grid container item justifyContent="center" mb={6}>
          <Typography variant="h3" fontWeight={700} color={'white'}>Leadership</Typography>
        </Grid>

        <Grid container item spacing={6} justifyContent={'center'}>
          <Grid item xs={12} md={3} textAlign={'center'} order={{ xs: 2, md: 1 }}>
            <Reveal>
              <img src={Leader1} width={'100%'}></img>
              <Typography variant="h5" color={'#E3C263'}>Rayner C. Lorenzo</Typography>
              <Typography variant="h6" color={'#E3C263'}>Chairman, 7th Pillar</Typography>
            </Reveal>
          </Grid>
          <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }}>
            <Reveal>
              <Typography variant="h6" color={'#E3C263'}>Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti felis lorem et nulla convallis dui faucibus pretium tincidunt. Fames lacinia lacus fusce accumsan cursus. In ornare quam leo vehicula varius. Aliquet vivamus curae montes interdum nunc. At finibus sollicitudin nam elit rutrum. Volutpat ut diam mi gravida eu cursus. Finibus curabitur a faucibus ante leo urna accumsan parturient. Euismod iaculis vestibulum senectus porttitor dapibus aenean nulla aliquet.</Typography>
            </Reveal>
          </Grid>
          <Grid item xs={12} md={3} textAlign={'center'} order={{ xs: 3, md: 3 }}>
            <Reveal>
              <img src={Leader2} width={'100%'}></img>
              <Typography variant="h5" color={'#E3C263'}>Marc Hussein P. Bundalian</Typography>
              <Typography variant="h6" color={'#E3C263'}>President & COO, 7th Pillar</Typography>
            </Reveal>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Section;