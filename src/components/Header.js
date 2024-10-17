import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, useTheme } from '@mui/material';
import CodingImg from '../assets/coding.png';
import MeImg from '../assets/me.png';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import TypewriterEffect from './TypewriterEffect';

const Header = ({ mode, toggleTheme }) => {
    const appTheme = useTheme();

    return (
        <AppBar
            position="fixed"
            sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
                height: '40px',
                background: `linear-gradient(-45deg, ${appTheme.palette.mode === 'dark' ? appTheme.palette.primary : appTheme.palette.primary.main}, #211A44, #04BBFF, #7C7AED)`,
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
                    <Button sx={{ color: 'white', textTransform: 'lowercase' }} onClick={() => window.location.href = ""}>
                        <code>
                            <TypewriterEffect
                                // text="func main() {}"
                                strings={['func main() {}', 'Hello, World!']}
                            />
                        </code>
                    </Button>
                </Typography>
                <Box>
                    <Button sx={{ color: 'white', fontWeight: 'bold' }} href='#about'>About</Button>
                    <Button sx={{ color: 'white', fontWeight: 'bold' }} href='#projects'>Projects</Button>
                    <IconButton sx={{ ml: 1 }} color="inherit" onClick={toggleTheme}>
                        {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;