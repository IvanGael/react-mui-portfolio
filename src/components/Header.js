import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import CodingImg from '../assets/coding.png';

const Header = () => {
    return (
        <AppBar
            position="fixed"
            sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
                height: '40px',
                background: 'linear-gradient(-45deg, #04BBFF, #7C80FC, #04BBFF, #7C7AED)',
                backgroundSize: '400% 400%',
                animation: 'gradient 15s ease infinite',
                '@keyframes gradient': {
                    '0%': {
                        backgroundPosition: '0% 50%'
                    },
                    '50%': {
                        backgroundPosition: '100% 50%'
                    },
                    '100%': {
                        backgroundPosition: '0% 50%'
                    }
                }
            }}
        >
            <Toolbar variant='dense' sx={{
                '@media all': {
                    minHeight: 30,
                },
            }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
                    <Button href='#'>
                        <img src={CodingImg} alt='CodingImg' style={{ objectFit: 'contain', width: '25px', height: '25px', display: 'flex' }} />
                    </Button>
                </Typography>
                <Box>
                    <Button sx={{ color: 'white', fontWeight: 'bold' }} href='#about'>About</Button>
                    <Button sx={{ color: 'white', fontWeight: 'bold' }} href='#projects'>Projects</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;