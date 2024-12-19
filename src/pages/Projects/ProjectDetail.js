import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { ProjectsContext } from '../../context/ProjectsContext';

const DetailContainer = styled.div`
  padding: 2rem;
`;

const ProjectImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 20px 0;
`;

const PDFViewer = styled.iframe`
  width: 100%;
  height: 800px;
  border: none;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const TechTag = styled.span`
  display: inline-block;
  background: #e8f5e9;
  color: #2e7d32;
  padding: 6px 12px;
  border-radius: 16px;
  margin: 4px;
  font-size: 0.9em;
`;

const ProjectDetail = () => {
  const { id } = useParams();
  const { projects } = useContext(ProjectsContext);
  const project = projects.find(p => p.id.toString() === id);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <DetailContainer>
      <h1>{project.title}</h1>
      <ProjectImage 
        src={`${process.env.PUBLIC_URL}/images/${project.image}`} 
        alt={project.title} 
      />
      <p>{project.details}</p>
      <div style={{ marginBottom: '20px' }}>
        {project.technologies.map(tech => (
          <TechTag key={tech}>{tech}</TechTag>
        ))}
      </div>
      {project.pdfUrl && (
        <PDFViewer
          src={project.pdfUrl}
          title={`${project.title} PDF`}
        />
      )}
    </DetailContainer>
  );
};

export default ProjectDetail;
