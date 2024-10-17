import { useRef, useEffect } from 'react';
import { Box } from '@mui/material';

const ObserverWrapper = ({ onEnter, children }) => {
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
    <Box ref={ref}>
      {children}
    </Box>
  );
};

export default ObserverWrapper;