import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const AboutContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
`;

const About = () => {
  return (
    <AboutContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ProfileImage 
        src="/path/to/your/profile-image.jpg" 
        alt="Your Profile" 
      />
      <div>
        <h1>About Me</h1>
        <p>
          A passionate developer creating modern web experiences. 
          Always learning and exploring new technologies.
        </p>
      </div>
    </AboutContainer>
  );
};

export default About;
