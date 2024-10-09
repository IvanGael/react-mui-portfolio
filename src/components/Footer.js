import React from 'react';
import { Box, Typography, Link, IconButton, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Box 
      sx={{ 
        bgcolor: 'background.paper', 
        p: 6, 
        position: 'relative'
      }} 
      component="footer"
    >
      <Divider sx={{mb: 4}}/>
      <Typography variant="body2" color="text.secondary" align="center">
        © {new Date().getFullYear()} Ivan APEDO. All rights reserved.
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        Built with{' '}
        <Link color="inherit" href="https://reactjs.org/">
          React
        </Link>{' '}
        and{' '}
        <Link color="inherit" href="https://mui.com/">
          Material-UI
        </Link>
      </Typography>
      <Box
        sx={{
          position: 'absolute',
          bottom: 16,
          right: 16,
          display: 'flex',
          gap: 1
        }}
      >
        <IconButton 
          color="text.secondary"
          aria-label="GitHub" 
          component="a" 
          href="https://github.com/IvanGael"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton 
          color="text.secondary"
          aria-label="LinkedIn" 
          component="a" 
          href="https://www.linkedin.com/in/ivan-apedo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton 
          color="text.secondary"
          aria-label="Twitter" 
          component="a" 
          href="https://x.com/IvanGal19"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;