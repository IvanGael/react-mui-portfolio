import { useState, useMemo } from "react";
import { CssBaseline, ThemeProvider,  Box, Toolbar } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GetTheme from "./theme/CustomTheme";

function App() {
  const [mode, setMode] = useState('light');

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(
    () =>
      GetTheme(mode),
    [mode],
  );

  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header mode={mode} toggleTheme={toggleTheme}/>
        <Box component="main" sx={{ flexGrow: 1, pt: { xs: 7, sm: 8 } }}>
          <Toolbar /> {/* This empty Toolbar acts as a spacer */}
          <Hero />
          <FeaturedProjects />
          <Skills />
          {/* <Contact /> */}
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;