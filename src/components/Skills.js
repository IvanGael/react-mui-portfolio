import React, { useRef, useEffect } from 'react';
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

const Skills = ({ onEnter }) => {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onEnter();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [onEnter]);


  return (
    <Box sx={{ bgcolor: 'background.paper', py: 8 }} ref={ref}>
      <Container maxWidth="lg">
        <Typography color="text.secondary" variant="h4" align="center" gutterBottom>
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