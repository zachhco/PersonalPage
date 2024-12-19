import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const Container = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  min-height: 100vh;
  background: white;
  box-shadow: 
    -15px 0 20px -10px rgba(76, 175, 80, 0.2),
    15px 0 20px -10px rgba(76, 175, 80, 0.2);
`;

const Layout = ({ children }) => {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </Container>
  );
};

export default Layout;
