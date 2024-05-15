import React from 'react';
import { Grid, Typography, Box, Link, Stack, Button } from '@mui/material';
import Location from '../assets/location_white.svg';
import Telephone from '../assets/telephone.svg';
import Phone from '../assets/phone_white.svg';
import Facebook from '../assets/Facebook.svg';
import Email from '../assets/email_white.svg';
import Leader1 from '../assets/Leader1.jpg';
import SevenPowers from '../assets/7Powers.png';
import ArzoHotel from '../assets/ArzoHotel.png';
import ArzoSupply from '../assets/ArzoSupply.png';
import BalatCo from '../assets/BalatCo.png';
import CoffeeBrewtherhood from '../assets/CoffeeBrewtherhood.png';
import GlobalviewTravelTours from '../assets/GlobalviewTravelTours.png';
import Luminacons from '../assets/Luminacons.png';
import Migois from '../assets/Migois.png';
import Novicide from '../assets/Novicide.png';
import Obelisk from '../assets/Obelisk.png';
import PSC from '../assets/PSC.png';
import ScienceHouse from '../assets/ScienceHouse.png';
import Superhouse from '../assets/Superhouse.png';
import SeventhPillar from '../assets/7thPillar.png';
import Reveal from '../components/reveal';
import '../styles/styles.css'

const About = () => {
  return (
    <>
      <Grid container
        // style={{ marginTop: '4em', marginBottom: '4em' }}
        bgcolor={'black'}
        px={{ xs: '2em', md: '10em' }}
        // spacing={4}
        py={'10em'}
        justifyContent="space-between"
        alignItems="center"
      >
        {/* <Grid item md={3} sm={12} xs={12} mb={4} height={'400px'} sx={{ backgroundImage: `url(${Leader1})`, backgroundSize: 'cover', backgroundPosition: 'top', borderRadius: '16px' }}></Grid> */}
        <Grid item md={12} sm={12} xs={12} mb={8} color={'#FFF'}>
          <Reveal>
            <Typography variant="h2" fontWeight={700} mb={4}>Mermann Flores</Typography>
            <Typography variant="h4" fontWeight={700}>Amaia/Ayala Land Corp.</Typography>
            <Typography variant="h6" fontWeight={700} mb={4}>Accredited Property Specialist</Typography>
            <Typography variant="h4" fontWeight={700}>South Cotabato Warriors</Typography>
            <Typography variant="h6" fontWeight={700} mb={4}>Team Manager</Typography>
            <Stack direction="row" spacing={1} mt={1} alignItems={'baseline'}>
              <img src={Phone} width={20}></img>
              <Typography fontSize={20} fontWeight={600}>+63 928 684 4880 Smart / +63 977 427 5596 Globe</Typography>
            </Stack>
            {/* <Typography variant="h4" fontWeight={700}>rcl@seventh-pillar.com</Typography> */}
            <Link href="mailto:rlorenzo@pest-science.com" color={'#FFF'} underline='none'>
              <Stack direction="row" spacing={1} mt={2} alignItems={'baseline'}>
                <img src={Email} width={20}></img>
                <Typography fontSize={20} fontWeight={600}>mermann5@yahoo.com</Typography>
              </Stack>
            </Link>
            {/* <Typography variant="h4" fontWeight={700}>+02 8334 2616</Typography> */}
            {/* <Typography variant="h4" fontWeight={700}>+63 918 935 8977</Typography> */}
            <Stack direction="row" spacing={1} mt={2} alignItems={'baseline'}>
              <img src={Location} width={20}></img>
              <Typography fontSize={20} fontWeight={600}>Villa Montserrat phase, Havila Taytay, Rizal</Typography>
            </Stack>
            <Link href="https://www.facebook.com/mermann.flores" target="_blank" color={'#FFF'} underline='none'>
              <Stack direction="row" spacing={1} mt={2} alignItems={'baseline'}>
              <img src={Facebook} width={20}></img>
                <Typography fontSize={20} fontWeight={600}>Mermann Valerie Flores</Typography>
              </Stack>
            </Link>
            {/* <Typography variant="h6" color={'#E3C263'}>Welcome to 7th Pillar, where innovation meets excellence in technological solutions. Established in 2023, we are a dynamic and forward-thinking company that provides cutting-edge start-to-end software and hardware solutions.</Typography> */}
          </Reveal>
          <Button
            variant="contained"
            // color="primary"
            sx={{ fontSize: '18px', color: '#000', backgroundColor: '#FFF', mt:'1em' }}
            href="../assets/vcard/MermannFlores.vcf"
          >
            Add to contact
          </Button>
        </Grid>
        {/* <Grid container spacing={4}>
          {sectionItems.map((item) => (
            <Grid item md={3} sm={6} xs={6} height={'200px'}>
              <Link href={item.link} target='_blank'>
                <Box width={'100%'} height={'100%'} sx={{ backgroundImage: `url(${item.logo})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid> */}
        {/* <Grid item md={9} mb={12}>
          <Reveal>
            <Typography variant="h2" fontWeight={700} color={'white'} mb={4}>Mission</Typography>
            <Typography variant="h6" color={'#E3C263'}>Our mission is to bridge the gap between hardware and software, providing seamless integration and unparalleled support. We empower businesses to thrive in the digital age by offering cloud-based solutions that cater to their unique needs.</Typography>
          </Reveal>
        </Grid>
        <Grid item md={9}>
          <Reveal>
            <Typography variant="h2" fontWeight={700} color={'white'} mb={4}>Vision</Typography>
            <Typography variant="h6" color={'#E3C263'}>To transform the way companies operate through cloud innovation and enable our clients to thrive in an ever-evolving technological landscape with a commitment to excellence, sustainable growth, and unwavering dedication to our clients.</Typography>
          </Reveal>
        </Grid> */}
      </Grid>
    </>
  );
};

export default About;