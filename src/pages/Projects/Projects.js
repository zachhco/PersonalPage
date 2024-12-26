import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ProjectsContext } from '../../context/ProjectsContext';

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const ProjectLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 1rem;
  object-fit: cover;
  aspect-ratio: 16/9;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 1rem;
  
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ProjectTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
  
  @media (min-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const Projects = () => {
  const { projects } = useContext(ProjectsContext);

  const getProjectPath = (id) => {
    switch(id) {
      case 1:
        return '/projects/seatbelt';
      case 2:
        return '/projects/ngo';
      case 3:
        return '/projects/car-safety-dash';
      default:
        return '#';
    }
  };

  return (
    <div>
      <Title>My Projects</Title>
      <ProjectGrid>
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectLink to={getProjectPath(project.id)}>
              <ProjectImage 
                src={project.image} 
                alt={project.title} 
              />
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectLink>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </div>
  );
};

export default Projects;
