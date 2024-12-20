import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const PreviewCard = styled(motion.div)`
  background: ${props => props.darkTheme ? '#000000' : '#ffffff'};
  color: ${props => props.darkTheme ? '#ffffff' : '#000000'};
  border-radius: 15px;
  padding: 20px;
  margin: 15px;
  min-height: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  @media (max-width: 768px) {
    min-height: 350px;
    padding: 15px;
    margin: 10px;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.darkTheme 
      ? '0 8px 16px rgba(0, 255, 0, 0.2)' 
      : '0 8px 16px rgba(0, 0, 0, 0.2)'};
  }
`;

const PreviewImage = styled.div`
  height: 200px;
  width: ${props => props.isCircular ? '200px' : '100%'};
  margin: ${props => props.isCircular ? '0 auto' : '0'};
  background-image: url(${props => props.image});
  background-size: ${props => props.isCircular ? 'cover' : '120% auto'};
  background-repeat: no-repeat;
  background-position: center;
  border-radius: ${props => props.isCircular ? '50%' : '10px'};
  margin-bottom: 15px;
  transition: transform 0.3s ease;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 180px;
    width: ${props => props.isCircular ? '180px' : '100%'};
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const PreviewTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: ${props => props.darkTheme ? '#39FF14' : 'inherit'};
  text-shadow: ${props => props.darkTheme ? '0 0 10px #39FF14' : 'none'};

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const PreviewDescription = styled.p`
  font-size: 1rem;
  color: ${props => props.darkTheme ? '#39FF14' : '#666666'};
  text-shadow: ${props => props.darkTheme ? '0 0 8px #39FF14' : 'none'};
  flex-grow: 1;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const PagePreview = ({ title, description, image, path, darkTheme }) => {
  const navigate = useNavigate();
  const isCircular = title === 'About' || title === 'FloatedZeus';

  return (
    <PreviewCard
      darkTheme={darkTheme}
      onClick={() => navigate(path)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <PreviewImage image={image} isCircular={isCircular} />
      <PreviewTitle darkTheme={darkTheme}>{title}</PreviewTitle>
      <PreviewDescription darkTheme={darkTheme}>{description}</PreviewDescription>
    </PreviewCard>
  );
};

export default PagePreview;
