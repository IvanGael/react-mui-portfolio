import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import BgHero1Img from '../assets/bg_hero1_1.png';

const Hero = () => {
    return (
        <div id='about'>
            <Box
            sx={{
                backgroundImage: `url(${BgHero1Img})`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                py: 8,
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Container maxWidth="md">
                <Box sx={{ 
                    backgroundColor: 'white', 
                    p: 4, borderRadius: 2, 
                    borderStyle: 'dotted', 
                    borderColor: 'black' ,
                    borderWidth: 2
                }}>
                    <Typography
                        component="h1"
                        variant="h4"
                        align="center"
                        sx={{color: 'black'}}
                        gutterBottom
                    >
                        Ivan APEDO
                    </Typography>
                    <Typography variant="h6" align="center" sx={{color: 'black'}} paragraph>
                        Passionate • Detail-Oriented • Proactive 
                    </Typography>
                    <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
                        <InfoSection title="Who I am" items={[
                            "Mobile Developer",
                            "Computer Vision Developer",
                            "Computer Vision & Machine Learning Enthusiast",
                            "Member of communities",
                        ]} />
                        <InfoSection title="What I do" items={[
                            "Mobile applications",
                            "Computer Vision based AI Stuffs",
                            "Contribution to open source projects",
                            "I am fluent in French, a little bit in English and some notions in Japanese"
                        ]} />
                        <InfoSection title="Where I do it" items={[
                            "I live in Nice, France",
                            "I work remotely in part time",
                        ]} />
                        <InfoSection title="When I do" items={[
                            "Monday to Friday",
                            "All days looking for the balance between work and personal life",
                        ]} />
                    </Box>
                </Box>
            </Container>
        </Box>
        </div>
    );
};

const InfoSection = ({ title, items }) => (
    <Box sx={{ width: '45%', mb: 4 }}>
        <Typography variant="h6" fontWeight={'bold'} sx={{color: 'black'}} gutterBottom>
            {title}
        </Typography>
        <ul style={{ color: 'black', paddingLeft: '20px' }}>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </Box>
);

export default Hero;