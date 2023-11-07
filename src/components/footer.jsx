import React from 'react';
import { Box, Typography } from '@mui/material';
import '../styles/styles.css'

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <Box sx={{ flexGrow: 1 }} className='footerContainer'>
      <Typography className='footerText'>
        Copyright © 2023 7th Pillar. All rights reserved
        {/* <Link href="#" target="_blank" underline="none">
          AppSeed
        </Link> */}
      </Typography>
      {/* <Typography className='footerDate'>Open-Source Sample - Buit with MUI</Typography> */}
    </Box>
  );
};

export default Footer;