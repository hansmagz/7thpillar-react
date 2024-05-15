import React from 'react';
import { Grid, Typography, Container, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Reveal from '../components/reveal';
import Hans from '../assets/Hans/hans.jpg';
import Loop1 from '../assets/Hans/loop1.jpg';
import Loop2 from '../assets/Hans/loop2.jpg';
import Loop3 from '../assets/Hans/loop3.jpg';
import Loop4 from '../assets/Hans/loop4.jpg';
import Loop5 from '../assets/Hans/loop5.jpg';
import Loop6 from '../assets/Hans/loop6.jpg';
import Acre1 from '../assets/Hans/acre1.jpg';
import Acre2 from '../assets/Hans/acre2.jpg';
import Acre3 from '../assets/Hans/acre3.jpg';
import DB1 from '../assets/Hans/db1.jpg';
import DB2 from '../assets/Hans/db2.jpg';
import DB3 from '../assets/Hans/db3.jpg';
import DB4 from '../assets/Hans/db4.jpg';
import DB5 from '../assets/Hans/db5.jpg';
import DB6 from '../assets/Hans/db6.jpg';
import DB7 from '../assets/Hans/db7.jpg';
import DB8 from '../assets/Hans/db8.jpg';
import DB9 from '../assets/Hans/db9.jpg';
import DB10 from '../assets/Hans/db10.jpg';
import DB11 from '../assets/Hans/db11.jpg';
import NFT1 from '../assets/Hans/nft1.png';
import NFT2 from '../assets/Hans/nft2.png';
import NFT3 from '../assets/Hans/nft3.png';
import NFT4 from '../assets/Hans/nft4.png';
import NFT5 from '../assets/Hans/nft5.png';
import Hackathon1 from '../assets/Hans/hackathon1.jpg';
import Hackathon2 from '../assets/Hans/hackathon2.jpg';
import POS1 from '../assets/Hans/pos1.png';
import POS2 from '../assets/Hans/pos2.png';
import POS3 from '../assets/Hans/pos3.png';
import POS4 from '../assets/Hans/pos4.png';
import Payroll1 from '../assets/Hans/payroll1.png';
import Payroll2 from '../assets/Hans/payroll2.png';
import Payroll3 from '../assets/Hans/payroll3.png';
import Profile1 from '../assets/Hans/profile1.png';
import Profile2 from '../assets/Hans/profile2.png';
import Profile3 from '../assets/Hans/profile3.png';
import Profile4 from '../assets/Hans/profile4.png';
import Profile5 from '../assets/Hans/profile5.png';
import Profile6 from '../assets/Hans/profile6.png';
import Profile7 from '../assets/Hans/profile7.png';
import Profile8 from '../assets/Hans/profile8.png';
import '../styles/styles.css'

const About = () => {
  const theme = useTheme();
  const phoneView = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Box width={'100%'} sx={{ backgroundColor: '#000' }}>
        <Container>
          <Grid container
            // style={{ marginTop: '4em', marginBottom: '4em' }}
            // bgcolor={'#323332'}
            // px={{ xs: '2em', md: '10em' }}
            // spacing={4}
            py={'10em'}
            color={'white'}
          // spacing={10}
          // justifyContent="space-between"
          // alignItems="center"
          >
            <Grid item md={12} sm={12} xs={12} textAlign={'center'} mb={12}>
              <Typography variant='h4'>Allein Hans Magpantay</Typography>
              <Typography variant='h6'>Portfolio</Typography>
            </Grid>
            <Grid item md={6} sm={12} xs={12} textAlign={'center'}>
              <img src={Hans} width={'80%'} />
            </Grid>
            <Grid item md={6} sm={12} xs={12} textAlign={'center'} alignContent={'center'}>
              <Typography variant='h6'>ABOUT ME</Typography>
              <Typography variant='p'>I am a skilled computer professional with 7+ years of experience who is eager to use my expertise in software development to contribute to your company’s success. I have an ability to learn quickly and think analytically. I am dedicated to assisting your organization in reaching its goals.</Typography>
            </Grid>

            <Grid item md={12} sm={12} xs={12} textAlign={'center'} mt={12} mb={6}>
              <Typography variant='h6'>LOOP PH</Typography>
              <Typography variant='p'>A mobile app that promotes safety motorcycle riding and tourism<br /><br />
                Appstore: <a href='https://apps.apple.com/hu/app/loop-ph/id6444645025' target='_blank'>click here</a><br />
                Playstore: <a href='https://play.google.com/store/apps/details?id=com.omnitech.loopph' target='_blank'>click here</a><br />
                App Gallery: <a href='https://appgallery.huawei.com/app/C109149703' target='_blank'>click here</a></Typography>
            </Grid>
            <Box display={'flex'} gap={'2em'} flexWrap={'wrap'} justifyContent={'center'}>
              <img src={Loop1} style={{ height: '60svh' }} />
              <img src={Loop2} style={{ height: '60svh' }} />
              <img src={Loop3} style={{ height: '60svh' }} />
              <img src={Loop4} style={{ height: '60svh' }} />
              <img src={Loop5} style={{ height: '60svh' }} />
              <img src={Loop6} style={{ height: '60svh' }} />
            </Box>

            <Grid item md={12} sm={12} xs={12} textAlign={'center'} mt={12} mb={6}>
              <Typography variant='h6'>ACRE HEALTH</Typography>
              <Typography variant='p'>3 Medical mobile app which is for Patient, Doctor and Nurse</Typography>
            </Grid>
            <Box display={'flex'} gap={'2em'} flexWrap={'wrap'} justifyContent={'center'}>
              <a href={'https://www.youtube.com/watch?v=M2YOEH4OnBg'} target='_blank' className='no-decoration'>
                <img src={Acre1} style={{ height: '60svh' }} />
                <Typography variant='h6' textAlign={'center'}>Patient App</Typography>
              </a>
              <a href={'https://www.youtube.com/watch?v=UXgYXFMBcks'} target='_blank' className='no-decoration'>
                <img src={Acre2} style={{ height: '60svh' }} />
                <Typography variant='h6' textAlign={'center'}>Doctor App</Typography>
              </a>
              <a href={'https://www.youtube.com/watch?v=G0S8nGl0eX4'} target='_blank' className='no-decoration'>
                <img src={Acre3} style={{ height: '60svh' }} />
                <Typography variant='h6' textAlign={'center'}>Nurse App</Typography>
              </a>
            </Box>

            <Grid item md={12} sm={12} xs={12} textAlign={'center'} mt={12} mb={6}>
              <Typography variant='h6'>DELIVERYBOY PH</Typography>
              <Typography variant='p'>DeliveryBoy is a local courier service that can deliver Grocery Items, Drugs, Food or Beverage, Clothing and Supplies. We also cover various types of fees such as Airline Ticketing, Money Delivery, Government Agencies Fees, Bills Payment, Loans Collection, Prepaid Loading, Credit Cards, and Gaming Pins.<br /><br />
                Appstore: <a href='https://apps.apple.com/ph/app/deliveryboyph/id1508426863' target='_blank'>click here</a><br />
                Playstore: <a href='https://play.google.com/store/apps/details?id=com.deliveryboy.app' target='_blank'>click here</a></Typography>
            </Grid>
            <Box display={'flex'} gap={'2em'} flexWrap={'wrap'} justifyContent={'center'}>
              <Box className={'image-hover-container'}>
                <img src={DB1} style={{ height: '60svh' }} />
                <Typography variant='h6' className='image-hover-text'>Login</Typography>
              </Box>
              <Box className={'image-hover-container'}>
                <img src={DB2} style={{ height: '60svh' }} />
                <Typography variant='h6' className='image-hover-text'>Home</Typography>
              </Box>
              <Box className={'image-hover-container'}>
                <img src={DB3} style={{ height: '60svh' }} />
                <Typography variant='h6' className='image-hover-text'>Store</Typography>
              </Box>
              <Box className={'image-hover-container'}>
                <img src={DB4} style={{ height: '60svh' }} />
                <Typography variant='h6' className='image-hover-text'>Product</Typography>
              </Box>
              <Box className={'image-hover-container'}>
                <img src={DB5} style={{ height: '60svh' }} />
                <Typography variant='h6' className='image-hover-text'>Variant</Typography>
              </Box>
              <Box className={'image-hover-container'}>
                <img src={DB6} style={{ height: '60svh' }} />
                <Typography variant='h6' className='image-hover-text'>Checkout</Typography>
              </Box>
              <Box className={'image-hover-container'}>
                <img src={DB7} style={{ height: '60svh' }} />
                <Typography variant='h6' className='image-hover-text'>Rider home</Typography>
              </Box>
              <Box className={'image-hover-container'}>
                <img src={DB8} style={{ height: '60svh' }} />
                <Typography variant='h6' className='image-hover-text'>Rider taking order</Typography>
              </Box>
              <Box className={'image-hover-container'}>
                <img src={DB9} style={{ height: '60svh' }} />
                <Typography variant='h6' className='image-hover-text'>Bills payment</Typography>
              </Box>
              <Box className={'image-hover-container'}>
                <img src={DB10} style={{ height: '60svh' }} />
                <Typography variant='h6' className='image-hover-text'>Ride hailing</Typography>
              </Box>
              <Box className={'image-hover-container'}>
                <img src={DB11} style={{ height: '60svh' }} />
                <Typography variant='h6' className='image-hover-text'>Merchant app</Typography>
              </Box>
            </Box>

            <Grid item md={12} sm={12} xs={12} textAlign={'center'} mt={12} mb={6}>
              <Typography variant='h6'>NFT MARKETPLACE</Typography>
              <Typography variant='p'>Link: <a href='https://maharlikan.estate' target='_blank'>https://maharlikan.estate</a></Typography>
            </Grid>
            <Box display={'flex'} gap={'2em'} flexWrap={'wrap'} justifyContent={'center'}>
              <img src={NFT1} style={{ height: '30svh' }} />
              <img src={NFT2} style={{ height: '30svh' }} />
              <img src={NFT3} style={{ height: '30svh' }} />
              <img src={NFT4} style={{ height: '30svh' }} />
              <img src={NFT5} style={{ height: '30svh' }} />
            </Box>

            <Grid item md={12} sm={12} xs={12} textAlign={'center'} mt={12} mb={6}>
              <Typography variant='h6'>IMPACT HACKATHON SMART SUSTAINABLE CITIES 2022 GRAND WINNER</Typography>
            </Grid>
            <Box display={'flex'} gap={'2em'} flexWrap={'wrap'} justifyContent={'center'}>
              <img src={Hackathon1} style={{ height: '60svh' }} />
              <img src={Hackathon2} style={{ height: '60svh' }} />
            </Box>

            <Grid item md={12} sm={12} xs={12} textAlign={'center'} mt={12} mb={6}>
              <Typography variant='h6'>POINT OF SALE SYSTEM</Typography>
            </Grid>
            <Box display={'flex'} gap={'2em'} flexWrap={'wrap'} justifyContent={'center'}>
              <img src={POS1} style={{ height: '30svh' }} />
              <img src={POS2} style={{ height: '30svh' }} />
              <img src={POS3} style={{ height: '30svh' }} />
              <img src={POS4} style={{ height: '30svh' }} />
            </Box>

            <Grid item md={12} sm={12} xs={12} textAlign={'center'} mt={12} mb={6}>
              <Typography variant='h6'>ATTENDANCE & PAYROLL SYSTEM</Typography>
            </Grid>
            <Box display={'flex'} gap={'2em'} flexWrap={'wrap'} justifyContent={'center'}>
              <img src={Payroll1} style={{ height: '30svh' }} />
              <img src={Payroll2} style={{ height: '30svh' }} />
              <img src={Payroll3} style={{ height: '30svh' }} />
            </Box>

            <Grid item md={12} sm={12} xs={12} textAlign={'center'} mt={12} mb={6}>
              <Typography variant='h6'>PROFILING SYSTEM</Typography>
            </Grid>
            <Box display={'flex'} gap={'2em'} flexWrap={'wrap'} justifyContent={'center'}>
              <img src={Profile1} style={{ height: '30svh' }} />
              <img src={Profile2} style={{ height: '30svh' }} />
              <img src={Profile3} style={{ height: '30svh' }} />
              <img src={Profile4} style={{ height: '30svh' }} />
              <img src={Profile5} style={{ height: '30svh' }} />
              <img src={Profile6} style={{ height: '30svh' }} />
              <img src={Profile7} style={{ height: '30svh' }} />
              <img src={Profile8} style={{ height: '30svh' }} />
            </Box>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default About;