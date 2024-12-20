import React from 'react';
import styled from '@emotion/styled';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  
  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Section = styled.section`
  margin-bottom: 2rem;
  
  h2 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    
    @media (min-width: 768px) {
      font-size: 1.8rem;
    }
  }
  
  p {
    font-size: 0.9rem;
    line-height: 1.6;
    margin-bottom: 1rem;
    
    @media (min-width: 768px) {
      font-size: 1.1rem;
      line-height: 1.8;
    }
  }
`;

const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const TechTag = styled.span`
  background-color: #f0f0f0;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  
  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Link = styled.a`
  color: #0066cc;
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
        <TechContainer>
          <TechTag>Web Development</TechTag>
        </TechContainer>
      </Section>
    </PageContainer>
  );
};

export default NGOProject;
