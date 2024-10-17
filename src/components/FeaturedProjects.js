import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, CardActions, Typography, Button } from '@mui/material';
import StreamIcon from '@mui/icons-material/Stream';
import DataObjectIcon from '@mui/icons-material/DataObject';


const projects = [
    {
        id: 1,
        title: 'Dice Game',
        description: 'Playful dice game with fun animations and customization',
        image: 'https://i.ibb.co/tQxgP68/367025283-e6eca525-830d-494c-a6fe-f285ae6d4761.png',
        github: 'https://github.com/IvanGael/dice_game',
        live: 'https://ivangael.github.io/dice_game'
    },
    {
        id: 2,
        title: 'Websocket Chat',
        description: 'A real-time chat app built with React with Go backend using WebSocket for handling communication',
        image: 'https://i.ibb.co/PWMdst2/Screenshot-2024-10-09-131528.png',
        github: 'https://github.com/IvanGael',
        live: 'https://chatyier.netlify.app'
    },
    {
        id: 3,
        title: 'Image Toolbox',
        description: 'A web app that offers a variety of image processing features, including object detection, resizing, filtering, text extraction, compression, comparison, and pose detection',
        image: 'https://i.ibb.co/r5gyLBd/Demo.png',
        github: 'https://github.com/IvanGael/Image-Toolbox-Frontend',
        live: 'https://image-toolbox.netlify.app'
    },
    {
        id: 4,
        title: 'Advanced Lane Detection',
        description: 'An advanced lane detection system for improving vehicle safety',
        image: 'https://github.com/IvanGael/Advanced-Lanes-Detection/raw/main/demo.png',
        github: 'https://github.com/IvanGael/Advanced-Lanes-Detection'
    },
    {
        id: 5,
        title: 'River cruise',
        description: 'River cruise tours booking mobile app',
        image: 'https://github.com/user-attachments/assets/45fe1f19-cac1-4a06-a0ad-9864132dfb0b',
        github: 'https://github.com/IvanGael/river_cruises_dribble-clone',
        live: 'https://ivangael.github.io/river_cruises_dribble-clone'
    },
    {
        id: 6,
        title: 'Social Distancing Monitoring',
        description: 'Monitor social distancing between people, identify high-risk areas and non-compliance',
        image: 'https://github.com/IvanGael/Social_Distancing/raw/main/demo.png',
        github: 'https://github.com/IvanGael/Social_Distancing'
    },
];

const FeaturedProjects = () => {

    return (
        <div id='projects'>
            <Container sx={{ py: 8 }} maxWidth="md">
                <Typography variant="h4" align="center" gutterBottom>
                    Featured Projects
                </Typography>
                <Grid container spacing={4}>
                    {projects.map((project) => (
                        <Grid item key={project.id} xs={12} sm={6} md={4}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardMedia
                                    component="img"
                                    sx={{ objectFit: 'cover', width: '100%', height: '23vh' }}
                                    image={project.image}
                                    alt={project.title}
                                />
                                <CardContent sx={{ flexGrow: 1 }} fontSize={18}>
                                    <Typography gutterBottom fontWeight={'bold'} variant="h6" component="h3">
                                        {project.title}
                                    </Typography>
                                    <Typography fontSize={14}>
                                        {project.description}
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ display: 'flex', justifyContent: 'end' }}>
                                    <Button
                                        variant='contained'
                                        color="info"
                                        href={project.github}
                                        target='_blank'
                                        endIcon={<DataObjectIcon />}
                                    >
                                        <Typography fontSize={14}>
                                            S
                                        </Typography>
                                        <Typography fontSize={14} sx={{ textTransform: 'lowercase' }}>
                                            ource
                                        </Typography>
                                    </Button>
                                    {
                                        project.live &&
                                        <Button
                                            variant='outlined'
                                            color="secondary"
                                            href={project.live}
                                            target='_blank'
                                            endIcon={<StreamIcon />}
                                        >
                                            <Typography fontSize={14}>
                                                L
                                            </Typography>
                                            <Typography fontSize={14} sx={{ textTransform: 'lowercase' }}>
                                                ive
                                            </Typography>
                                        </Button>
                                    }
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default FeaturedProjects;