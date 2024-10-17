import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import BgHero1Img from '../assets/spiral.png';
import MeImg from '../assets/me.png';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';


function Hero() {

    return (
        <div id='about' >
            <Box
                sx={{
                    backgroundImage: `url(${BgHero1Img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    py: 8,
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                }}
            >
                <Container maxWidth="md">
                    <Box sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        p: 4, borderRadius: 2,
                        borderStyle: 'dotted',
                        borderColor: 'black',
                        borderWidth: 2
                    }}>
                        <Typography
                            fontWeight={'bold'}
                            component="h1"
                            variant="h5"
                            align="center"
                            sx={{ color: 'black', letterSpacing: 2 }}
                            gutterBottom
                        >
                            Hey There👋
                        </Typography>
                        <Typography fontSize={18} variant="h6" align="center" sx={{ color: 'black' }} paragraph>
                        <code>{`My name is Ivan APEDO`}</code>
                        </Typography>

                        {/* <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
                      <Button variant="contained" color="primary" sx={{ borderRadius: 50, px: 4, py: 1.5 }}>
                          <Typography >L</Typography>
                          <Typography sx={{ textTransform: 'lowercase' }}>earn More</Typography>
                      </Button>
                      <Button variant="outlined" color="secondary" sx={{ borderRadius: 50, px: 4, py: 1.5 }}>
                          <Typography sx={{ textTransform: 'lowercase' }}>Get in Touch</Typography>
                      </Button>
                  </Box> */}

                        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
                            <InfoSection title="Who I am" items={[
                                "Web & Mobile Developer",
                                "Computer Vision Engineer",
                                "ML & Deep Learning Enthusiast",
                                "Community Member",
                            ]} />
                            <InfoSection title="What I do" items={[
                                "Web & Mobile apps",
                                "Computer Vision based solutions",
                                "Open Source Projects",
                                "Languages: French, English, Japanese (Basics)"
                            ]} />
                            <InfoSection title="Where I do it" items={[
                                "Based in Nice, France",
                                "Remote, Part-Time"
                            ]} />
                            <InfoSection title="When I do it" items={[
                                "Weekdays, 9-5",
                                "Balancing Work & Life"
                            ]} />
                        </Box>
                    </Box>
                </Container>

                <Box sx={{ position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
                        <ExpandCircleDownIcon fontSize="large" />
                    </Box>
                </Box>
            </Box>
        </div>
    );
}

const InfoSection = ({ title, items }) => (
    <Box sx={{ width: '45%', mb: 4 }}>
        <Typography color='primary' variant="h6" fontWeight={'bold'} gutterBottom>
        🔹{title}
        </Typography>
        <ul style={{ color: 'black', paddingLeft: '20px' }}>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </Box>
);

export default Hero;