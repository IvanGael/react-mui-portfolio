import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const LottieAnimation = ({ animationData, width = '100%', height = '100%', style = {} }) => {
  const containerRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      if (animRef.current) {
        animRef.current.destroy();
      }

      animRef.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
    }

    return () => {
      if (animRef.current) {
        animRef.current.destroy();
      }
    };
  }, [animationData]);

  return <div ref={containerRef} style={{ width, height, ...style }} />;
};

export default LottieAnimation;