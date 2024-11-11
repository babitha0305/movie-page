import React from 'react';
import { Box, Typography, Link } from '@mui/material';

function SimpleFooter() {
  return (
    <Box sx={{ backgroundColor: '#800020', color: '#FAF3E0', padding: '1rem', textAlign: 'center', marginTop: '100px' }}>
      <Typography variant="body2">© 2024 Movie Mania</Typography>
      <Link href="#" color="inherit" variant="body2" sx={{ display: 'block', marginTop: '0.5rem' }}>
        Privacy Policy
      </Link>
      <Link href="#" color="inherit" variant="body2" sx={{ display: 'block' }}>
        Terms of Service
      </Link>
    </Box>
  );
}

export default SimpleFooter;
