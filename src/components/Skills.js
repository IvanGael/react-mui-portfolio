import React from 'react';
import { Container, Typography, Box, Chip } from '@mui/material';

const skills = [
    'React', 
    'Node.js', 
    'Python/Flask', 
    'Go', 
    'Flutter/Dart', 
    'Firebase', 
    'OpenCV', 
    'Tensorflow', 
    'PyTorch', 
    'Mediapipe',
    'CI/CD: Github Actions',
    'Git'
];

const Skills = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          Skills
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1 }}>
          {skills.map((skill) => (
            <Chip key={skill} label={skill} color="primary" variant="outlined" />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;