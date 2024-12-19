import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ProjectsContext } from '../../context/ProjectsContext';

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
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
`;

const Projects = () => {
  const { projects } = useContext(ProjectsContext);

  const getProjectPath = (id) => {
    switch(id) {
      case 1:
        return '/projects/seatbelt';
      case 2:
        return '/projects/ngo';
      default:
        return '#';
    }
  };

  return (
    <div>
      <h1>My Projects</h1>
      <ProjectGrid>
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectLink to={getProjectPath(project.id)}>
              <ProjectImage src={`/images/${project.image}`} alt={project.title} />
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </ProjectLink>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </div>
  );
};

export default Projects;
