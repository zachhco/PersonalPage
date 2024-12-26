import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  min-height: 100vh;
  background: ${props => props.isDarkTheme ? '#000000' : 'white'};
  box-shadow: ${props => props.isDarkTheme ? `
    0 0 20px #00ff00,
    0 0 30px #00ff00,
    0 0 40px #00ff00,
    0 0 50px #00ff00` : `
    -15px 0 20px -10px rgba(76, 175, 80, 0.2),
    15px 0 20px -10px rgba(76, 175, 80, 0.2)`};
  position: relative;
  z-index: 1;
`;

const Container = motion(StyledContainer);

const Layout = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDarkTheme(document.body.classList.contains('dark-theme-wrapper'));
    };

    // Initial check
    checkTheme();

    // Set up observer to watch for class changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Container
      $isDarkTheme={isDarkTheme}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </Container>
  );
};

export default Layout;
