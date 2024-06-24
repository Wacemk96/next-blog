import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        py: 2,
        px: 20,
        textAlign: 'center',
        backgroundColor: '#1d2b35',
        color: 'white',
        mt: 8,
      }}
    >
      <Typography
        variant="body1"
        component="p"
      >
        Design and Developed by Muhammad Waseem
      </Typography>
    </Box>
  );
};

export default Footer;
