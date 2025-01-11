import React from 'react';
import styled from '@emotion/styled';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const Section = styled.section`
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #444;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #666;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 800px;
  height: auto;
  margin: 2rem 0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    margin: 1.5rem 0;
  }
`;

const List = styled.ul`
  margin: 1.5rem 0;
  padding-left: 2rem;

  li {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: #666;
  }

  @media (max-width: 768px) {
    padding-left: 1.5rem;
    
    li {
      font-size: 1rem;
      margin-bottom: 0.4rem;
    }
  }
`;

const DownloadButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
`;

const SeatbeltProject = () => {
  return (
    <PageContainer>
      <Title>Harnessing Predictive Models to Enhance Road Safety</Title>
      
      <Section>
        <SectionTitle>Project Overview</SectionTitle>
        <Text>
        My senior thesis investigates the effectiveness of seatbelts as an automotive safety mechanism and examines the influence of 
        risky behaviors, such as alcohol and drug consumption, on accident severity. The research was inspired by Sam Peltzman’s paper 
        “The Effects of Automobile Safety Regulation” (1975), which claims there is a risk compensation effect associated with the use of 
        seatbelts. Risk compensation theory (RCT) posits that a safety device, in this case, the seatbelt, lowers the perceived cost of damages, 
        thus incentivizing more risky behavior. Peltzman finds this effect to be present with seatbelts and thus argues that seatbelts are not 
        beneficial as a road safety device. My research revisits Peltzman’s findings using updated data and more advanced modeling techniques 
        to reassess the validity of his claims.
        </Text>
      </Section>

      <Section>
        <SectionTitle>Key Findings</SectionTitle>
        <List>
          <li>Strong evidence supporting the life-saving potential of seatbelts</li>
          <li>No evidence of Risk Compensation Theory pertaining to seatbelts</li>
          <li>Significant associations between substance use and increased probability of death in severe accidents</li>
          <li>Superior predictive performance of ensemble-based machine learning models, particularly random forest approach</li>
          <li>Trade-off between model accuracy and interpretability when comparing ML and econometric approaches</li>
        </List>
      </Section>

      <Section>
        <SectionTitle>Methodology</SectionTitle>
        <Text>
        The study employs a comprehensive approach combining econometric analysis with machine learning techniques. 
        I utilize data from the FARS (Fatality Analysis Reporting System) database and implement 
        various modeling strategies including probit, logit, and random forest models.
        </Text>
        <Image 
          src={process.env.PUBLIC_URL + '/images/Belting3.png'} 
          alt="Research Methodology" 
        />
      </Section>

      <Section>
        <SectionTitle>Access the Full Paper</SectionTitle>
        <Text>
          For a detailed analysis and complete findings, you can download the full paper below:
        </Text>
        <DownloadButton 
          href={process.env.PUBLIC_URL + '/resources/thesis.pdf'} 
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Paper (PDF)
        </DownloadButton>
      </Section>

      <Section>
        <SectionTitle>Interactive Adaptation</SectionTitle>
        <Text>
          To explore an interactive adaptation of my research click the link below:
        </Text>
        <DownloadButton 
          href="https://cohenzach.com/projects/car-safety-dash"
        >
          Car Safety Prediction Dashboard
        </DownloadButton>
      </Section>
    </PageContainer>
  );
};

export default SeatbeltProject;
