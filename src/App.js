import { useState, useMemo } from "react";
import { ThemeProvider, Box, Toolbar } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import LottieAnimation from './components/LottieAnimation';
import GetTheme from "./theme/CustomTheme";

import heroAnimation from './assets/Ah.json';
import projectsAnimation from './assets/projects.json';
import skillsAnimation from './assets/skills.json';

function App() {
  const [mode, setMode] = useState('light');
  const [currentSection, setCurrentSection] = useState('hero');

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(
    () => GetTheme(mode),
    [mode],
  );

  const getCurrentAnimation = () => {
    switch (currentSection) {
      case 'hero':
        return heroAnimation;
      case 'projects':
        return projectsAnimation;
      case 'skills':
        return skillsAnimation;
      default:
        return heroAnimation;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header mode={mode} toggleTheme={toggleTheme}/>
        <Box component="main" sx={{ flexGrow: 1, pt: { xs: 7, sm: 8 }, position: 'relative' }}>
          <Toolbar />
          <Box sx={{ position: 'fixed', top: '80px', right: '20px', width: '150px', height: '150px', zIndex: 1000 }}>
            <LottieAnimation animationData={getCurrentAnimation()} />
          </Box>
          <Hero onEnter={() => setCurrentSection('hero')} />
          <FeaturedProjects onEnter={() => setCurrentSection('projects')} />
          <Skills onEnter={() => setCurrentSection('skills')} />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;