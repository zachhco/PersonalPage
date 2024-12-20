import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme === 'dark' ? '#00ff00' : '#333'};
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: ${props => props.theme === 'dark' ? '#fff' : '#666'};
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 800px;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const DeathMachine = () => {
  return (
    <Container>
      <Title>Death Prediction Dash Display</Title>
      <Description>
        The Death Prediction Dash Display demonstrates a concept for a car dashboard that shows real-time
        probability of fatal accidents based on current driving conditions. This model uses real data from
        the Department of Transportation's Fatality Analysis Reporting System (FARS) to predict the probability
        of death in a car accident based on various factors.
      </Description>
      <StyledIframe 
        src="https://deathmachine.streamlit.app/"
        title="Death Machine Streamlit App"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Container>
  );
};

export default DeathMachine;