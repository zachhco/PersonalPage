import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const HomeContainer = styled(motion.div)`
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #666;
`;

const Home = () => {
  return (
    <HomeContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Title>Welcome to My Personal Website</Title>
      <Subtitle>
        Showcasing my projects and professional journey
      </Subtitle>
    </HomeContainer>
  );
};

export default Home;
