import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import PagePreview from '../../components/PagePreview/PagePreview';

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
  margin-bottom: 3rem;
`;

const PreviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Home = () => {
  const pages = [
    {
      title: 'Projects',
      description: 'Explore my portfolio of projects and achievements.',
      image: `${process.env.PUBLIC_URL}/images/work.png`,
      path: '/projects'
    },
    {
      title: 'About',
      description: 'Learn about my journey and the tools I use.',
      image: `${process.env.PUBLIC_URL}/images/headshot.jpg`,
      path: '/about'
    },
    {
      title: 'FloatedZeus',
      description: 'Start Floating',
      image: `${process.env.PUBLIC_URL}/floatedzeus-favicon.png`,
      path: '/floatedzeus',
      darkTheme: true
    }
  ];

  return (
    <HomeContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Title>Welcome to My Personal Website</Title>
      <Subtitle>
        Showcasing my projects, passions, and professional journey
      </Subtitle>
      <PreviewGrid>
        {pages.map((page, index) => (
          <PagePreview
            key={index}
            title={page.title}
            description={page.description}
            image={page.image}
            path={page.path}
            darkTheme={page.darkTheme}
          />
        ))}
      </PreviewGrid>
    </HomeContainer>
  );
};

export default Home;
