import React from 'react';
import styled from '@emotion/styled';
import { FaLinkedin, FaEnvelope, FaSoundcloud, FaGithub } from 'react-icons/fa';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  background-color: #333;
  color: white;
`;

const IconLink = styled.a`
  color: white;
  margin: 0 1rem;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <IconLink href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </IconLink>
      <IconLink href="mailto:example@example.com">
        <FaEnvelope />
      </IconLink>
      <IconLink href="https://soundcloud.com" target="_blank" rel="noopener noreferrer">
        <FaSoundcloud />
      </IconLink>
      <IconLink href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </IconLink>
    </FooterContainer>
  );
};

export default Footer;
