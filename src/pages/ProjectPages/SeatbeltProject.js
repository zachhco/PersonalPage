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

const Section = styled.section`
  margin: 2rem 0;
`;

const SeatbeltProject = () => {
  return (
    <PageContainer>
      <Title>Harnessing Predictive Models to Enhance Road Safety</Title>
      
      <Section>
        <ProjectImage src="/images/belting3.png" alt="Seatbelt Project" />
      </Section>

      <Section>
        <h2>Overview</h2>
        <p>
          An Econometric Investigation into Risk Compensation & A Test of Machine Learning Model Efficacy
        </p>
      </Section>

      <Section>
        <h2>Research Details</h2>
        <p>
          This paper investigates the effectiveness of seatbelts as a safety mechanism, 
          the influence of risky behaviors like alcohol and drug consumption on accident severity, 
          and compares the predictive performance of machine learning models against econometric 
          models in the context of vehicle-related fatalities.
        </p>
        
        <p>
          Key findings include evidence supporting the life-saving potential of seatbelts 
          and significant associations between substance use and increased probability of 
          death in severe accidents. The research also demonstrates that ensemble-based 
          machine learning models, specifically the random forest approach, show superior 
          predictive performance compared to individual econometric models such as probit 
          and logit models in predicting automotive fatalities.
        </p>
        
        <p>
          However, despite the predictive accuracy of the random forest model, there are 
          interpretability challenges when compared to the econometric models, which tend 
          to provide more straightforward interpretability due to their simpler structure 
          and easy-to-understand coefficients.
        </p>
      </Section>

      <Section>
        <h2>Technologies Used</h2>
        <div>
          <TechTag>Machine Learning</TechTag>
          <TechTag>Econometrics</TechTag>
          <TechTag>Random Forest</TechTag>
        </div>
      </Section>

      <Section>
        <h2>Full Paper</h2>
        <PDFViewer
          src="/resources/thesis.pdf"
          title="Seatbelt Research Paper"
        />
      </Section>
    </PageContainer>
  );
};

export default SeatbeltProject;
