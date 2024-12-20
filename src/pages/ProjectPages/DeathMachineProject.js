import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import DeathMachine from '../../components/DeathMachine/DeathMachine';

const ProjectContainer = styled(motion.div)`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const DeathMachineProject = () => {
  return (
    <ProjectContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <DeathMachine />
    </ProjectContainer>
  );
};

export default DeathMachineProject;
