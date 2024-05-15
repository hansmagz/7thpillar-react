import React from 'react';
import { Grid, Typography, Button, Stack, Link } from '@mui/material';
import Phone from '../assets/phone3.svg';
import Email from '../assets/email_blue.svg';
import Globe from '../assets/globe.svg';
import Location from '../assets/location_blue.svg';
import Reveal from '../components/reveal';
import '../styles/styles.css'

const About = () => {
  return (
    <>
      <Grid container
        // style={{ marginTop: '4em', marginBottom: '4em' }}
        bgcolor={'#FFFFFF'}
        px={{ xs: '2em', md: '10em' }}
        // spacing={4}
        py={'10em'}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item md={9} mb={12}>
          <Reveal>
            <Typography variant="h2" fontWeight={700} color={'#005DAC'}>Marco A. Gregorio</Typography>
            <Typography variant="h4" color={'#005DAC'}>Senior Sales & Channel Manager</Typography>
            <Typography variant="h4" color={'#005DAC'}>Asian Sales business Dept.</Typography>
            <Typography variant="h4" color={'#005DAC'} mb={4}>Channel Solution Business Unit</Typography>
            <Stack direction="row" spacing={1} mt={1} alignItems={'baseline'}>
              <img src={Phone} width={20}></img>
              <Typography fontSize={20} fontWeight={600} color={'#005DAC'}>+63 917 872 1925</Typography>
            </Stack>
            <Link href="mailto:marco.gregorio@gigabyte.com" color={'#1F427A'} underline='none'>
              <Stack direction="row" spacing={1} mt={2} alignItems={'baseline'}>
                <img src={Email} width={20}></img>
                <Typography fontSize={20} fontWeight={600} color={'#005DAC'}>marco.gregorio@gigabyte.com</Typography>
              </Stack>
            </Link>
            <Stack direction="row" spacing={1} mt={2} alignItems={'baseline'}>
              <img src={Location} width={20}></img>
              <Typography fontSize={20} fontWeight={600} color={'#005DAC'}>No.6, Baoqiang Rd., Xindian Dist., New Taipei City 231, Taiwan</Typography>
            </Stack>
            <Link href="https://www.gigabyte.com/ph" target="_blank" color={'#1F427A'} underline='none'>
              <Stack direction="row" spacing={1} mt={2} alignItems={'baseline'}>
                <img src={Globe} width={20}></img>
                <Typography fontSize={20} fontWeight={600} color={'#005DAC'}>Gigabyte</Typography>
              </Stack>
            </Link>
            <Link href="https://www.linkedin.com/in/marco-gregorio-689799a/" target="_blank" color={'#1F427A'} underline='none'>
              <Stack direction="row" spacing={1} mt={2} alignItems={'baseline'}>
                <img src={Globe} width={20}></img>
                <Typography fontSize={20} fontWeight={600} color={'#005DAC'}>Linkedin</Typography>
              </Stack>
            </Link>
            {/* <Typography variant="h4" fontWeight={700} color={'#005DAC'}>mag@seventh-pillar.com</Typography>
            <Typography variant="h4" fontWeight={700} color={'#005DAC'}>+02 8334 2616</Typography>
            <Typography variant="h4" fontWeight={700} color={'#005DAC'}>+63 917 872 1925</Typography> */}
            {/* <Typography variant="h6" color={'#E3C263'}>Welcome to 7th Pillar, where innovation meets excellence in technological solutions. Established in 2023, we are a dynamic and forward-thinking company that provides cutting-edge start-to-end software and hardware solutions.</Typography> */}
          <Button
            variant="contained"
            // color="primary"
            sx={{ fontSize: '18px', color: '#FFFFFF', backgroundColor: '#1F427A', mt:'1em' }}
            href="../assets/vcard/MarcoGregorio.vcf"
          >
            Add to contact
          </Button>
          </Reveal>
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