import React from 'react';
import { Box, Typography } from '@mui/material';
import '../styles/styles.css'

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <Box sx={{ flexGrow: 1 }} className='footerContainer'>
      <Typography className='footerText'>
        7th Pillar © 2023
        {/* <Link href="#" target="_blank" underline="none">
          AppSeed
        </Link> */}
      </Typography>
      {/* <Typography className='footerDate'>Open-Source Sample - Buit with MUI</Typography> */}
    </Box>
  );
};

export default Footer;