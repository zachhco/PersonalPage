import React from 'react';
import styled from '@emotion/styled';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

const ProjectImage = styled.img`
  width: 100%;
  max-width: 800px;
  height: auto;
  border-radius: 8px;
  margin: 20px 0;
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

const Section = styled.section`
  margin: 2rem 0;
`;

const Link = styled.a`
  color: #2e7d32;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const NGOProject = () => {
  return (
    <PageContainer>
      <Title>Siphekela Isizwe Empowerment and Feeding Scheme - Website</Title>
      
      <Section>
        <ProjectImage 
          src={process.env.PUBLIC_URL + '/images/snap.png'} 
          alt="NGO Website" 
        />
      </Section>

      <Section>
        <h2>Overview</h2>
        <p>
          Website development for an NGO in South Africa
        </p>
      </Section>

      <Section>
        <h2>Project Details</h2>
        <p>
          During my time doing research in South Africa, I was fortunate enough to 
          develop relationships with several amazing NGOs. One of them was Siphekela 
          Isizwe Empowerment and Feeding Scheme. Run by Lungi, they provide nutrition, 
          empowerment, and relief to seniors and children in western Cape townships.
        </p>
        
        <p>
          To give Lungi and Siphekela Isizwe Empowerment and Feeding Scheme more 
          visibility, I created a website that provides an overview of their work 
          and a means by which people can assist.
        </p>
        
        <p>
          Visit the website: <Link href="https://siphekelaisizwe.com" target="_blank" rel="noopener noreferrer">
            siphekelaisizwe.com
          </Link>
        </p>
      </Section>

      <Section>
        <h2>Technologies Used</h2>
        <div>
          <TechTag>Web Development</TechTag>
          <TechTag>NGO</TechTag>
          <TechTag>South Africa</TechTag>
        </div>
      </Section>
    </PageContainer>
  );
};

export default NGOProject;
