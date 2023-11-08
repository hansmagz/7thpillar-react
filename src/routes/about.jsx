import React from 'react';
import { Grid, Typography } from '@mui/material';
import '../styles/styles.css'

const About = () => {
  return (
    <>
      <Grid container
        // style={{ marginTop: '4em', marginBottom: '4em' }}
        // bgcolor={'#323332'}
        px={{xs:'2em', md:'10em'}}
        // spacing={4}
        py={'10em'}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item md={9} mb={12}>
          <Typography variant="h2" fontWeight={700} color={'white'} mb={4}>About Us</Typography>
          <Typography variant="h6" color={'#E3C263'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elementum enim et mauris tempor sagittis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed semper convallis volutpat. Nulla facilisis posuere bibendum. Donec sed velit vitae dolor auctor dignissim. Suspendisse a pretium ante. Duis lobortis nunc ut pretium dapibus. Nam condimentum dui id enim congue commodo. Curabitur nec dui elit.<br/><br/>Proin in justo facilisis, interdum urna ac, porttitor orci. Ut sodales, velit at sollicitudin dapibus, augue nisl pulvinar massa, ut faucibus nulla orci in ligula. Donec sed mattis sem. Mauris non tellus cursus, faucibus urna et, feugiat urna. Nulla faucibus sed mauris ac venenatis. Quisque tristique risus ut massa varius bibendum eget varius dui. Maecenas iaculis tellus et diam ultrices, et consequat tortor venenatis. Sed et sem massa. Integer nec justo dictum, malesuada leo non, fermentum leo. Nullam eget luctus ex. Quisque porta tincidunt felis et consequat. Donec malesuada tortor non tortor dapibus scelerisque id sed tellus. Ut condimentum hendrerit feugiat. Quisque aliquam odio mi, vitae posuere tortor bibendum eu.<br/><br/>Donec vitae augue imperdiet, porta urna quis, convallis massa. Vivamus quis venenatis libero, sed mollis nibh. Proin in elit sit amet arcu vehicula blandit at dictum augue. Duis cursus augue nunc, eget lacinia sapien tristique in. Praesent ex justo, finibus vitae congue maximus, dapibus at sapien. Quisque egestas nibh nec luctus dapibus. Phasellus eu aliquam enim. Etiam ut lacinia libero. Duis rhoncus condimentum efficitur. Mauris dictum nibh a tellus venenatis convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper lorem ac suscipit auctor. Etiam lobortis odio ex.</Typography>
        </Grid>
        {/* <Grid item md={3} textAlign={'center'}>
          <Button
            variant="outlined"
            color="primary"
            sx={{ width: '300px', fontSize: '24px' }}
          >
            Let's Talk
          </Button>
        </Grid> */}
        <Grid item md={9} mb={12}>
          <Typography variant="h2" fontWeight={700} color={'white'} mb={4}>Mission</Typography>
          <Typography variant="h6" color={'#E3C263'}>Our mission is to bridge the gap between hardware and software, providing seamless integration, and unparalleled support. We empower businesses to thrive in the digital age by offering tailor-made solutions that cater to their unique needs.</Typography>
        </Grid>
        <Grid item md={9}>
          <Typography variant="h2" fontWeight={700} color={'white'} mb={4}>Vision</Typography>
          <Typography variant="h6" color={'#E3C263'}>To transform the way companies operate, by fostering innovation and enabling our clients to thrive in an ever-evolving technological landscape. With a commitment to excellence, sustainable growth, and unwavering dedication to our clients.</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default About;