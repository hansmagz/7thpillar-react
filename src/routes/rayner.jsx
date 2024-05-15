import React from 'react';
import { Grid, Typography, Box, Link, Stack, Button } from '@mui/material';
import Location from '../assets/location_blue.svg';
import Telephone from '../assets/telephone.svg';
import Phone from '../assets/phone3.svg';
import Email from '../assets/email_blue.svg';
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
  const sectionItems = [
    {
      logo: SeventhPillar,
      link: '/'
    }, {
      logo: SevenPowers,
      link: 'https://www.facebook.com/7powermotors'
    },
    {
      logo: ArzoHotel,
      link: 'https://www.arzohotels.com'
    },
    {
      logo: ArzoSupply,
      link: ''
    },
    {
      logo: BalatCo,
      link: 'https://www.facebook.com/BALATCOManufacturingCorporation'
    },
    {
      logo: CoffeeBrewtherhood,
      link: 'https://www.facebook.com/coffeebrewtherhood'
    },
    {
      logo: GlobalviewTravelTours,
      link: 'https://www.facebook.com/globalviewtravelandtours'
    },
    {
      logo: Luminacons,
      link: ''
    },
    {
      logo: Migois,
      link: 'https://www.facebook.com/migoisresto'
    },
    {
      logo: Novicide,
      link: ''
    },
    {
      logo: Obelisk,
      link: 'https://www.facebook.com/obeliskcafe'
    },
    {
      logo: PSC,
      link: 'https://pestsciencecorp.com'
    },
    {
      logo: ScienceHouse,
      link: 'https://sciencehouseinc.com/contact_us.html'
    },
    {
      logo: Superhouse,
      link: 'http://www.superhouse-cafecorp.com'
    }
  ];
  return (
    <>
      <Grid container
        // style={{ marginTop: '4em', marginBottom: '4em' }}
        bgcolor={'white'}
        px={{ xs: '2em', md: '10em' }}
        // spacing={4}
        py={'10em'}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item md={3} sm={12} xs={12} mb={4} height={'400px'} sx={{ backgroundImage: `url(${Leader1})`, backgroundSize: 'cover', backgroundPosition: 'top', borderRadius: '16px' }}></Grid>
        <Grid item md={12} sm={12} xs={12} mb={8} color={'#1F427A'}>
          <Reveal>
            <Typography variant="h2" fontWeight={700}>Rayner C. Lorenzo</Typography>
            <Typography variant="h4" fontWeight={700} mb={4}>President & CEO</Typography>
            <Stack direction="row" spacing={1} mt={1} alignItems={'baseline'}>
              <img src={Phone} width={20}></img>
              <Typography fontSize={20} fontWeight={600}>+63 918 935 8977</Typography>
            </Stack>
            {/* <Typography variant="h4" fontWeight={700}>rcl@seventh-pillar.com</Typography> */}
            <Link href="mailto:rlorenzo@pest-science.com" color={'#1F427A'} underline='none'>
              <Stack direction="row" spacing={1} mt={2} alignItems={'baseline'}>
                <img src={Email} width={20}></img>
                <Typography fontSize={20} fontWeight={600}>rlorenzo@pest-science.com</Typography>
              </Stack>
            </Link>
            {/* <Typography variant="h4" fontWeight={700}>+02 8334 2616</Typography> */}
            {/* <Typography variant="h4" fontWeight={700}>+63 918 935 8977</Typography> */}
            <Stack direction="row" spacing={1} mt={2} alignItems={'baseline'}>
              <img src={Location} width={20}></img>
              <Typography fontSize={20} fontWeight={600}>Pest Science Corporation Building 2410 Hen. Belarmino Street, Bangkal, Makati City</Typography>
            </Stack>
            {/* <Typography variant="h6" color={'#E3C263'}>Welcome to 7th Pillar, where innovation meets excellence in technological solutions. Established in 2023, we are a dynamic and forward-thinking company that provides cutting-edge start-to-end software and hardware solutions.</Typography> */}
          </Reveal>
          <Button
            variant="contained"
            // color="primary"
            sx={{ fontSize: '18px', color: '#FFFFFF', backgroundColor: '#1F427A', mt:'1em' }}
            href="../assets/vcard/RaynerLorenzo.vcf"
          >
            Add to contact
          </Button>
        </Grid>
        <Grid container spacing={4}>
          {sectionItems.map((item) => (
            <Grid item md={3} sm={6} xs={6} height={'200px'}>
              <Link href={item.link} target='_blank'>
                <Box width={'100%'} height={'100%'} sx={{ backgroundImage: `url(${item.logo})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
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