import React from 'react';
import styled from '@emotion/styled';
import { FaLinkedin, FaEnvelope, FaSoundcloud, FaGithub, FaCar } from 'react-icons/fa';

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
      <IconLink href="https://www.linkedin.com/in/zach-cohen-683a58191/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </IconLink>
      <IconLink href="mailto:zrocohen@gmail.com">
        <FaEnvelope />
      </IconLink>
      <IconLink href="https://soundcloud.com/floatedzeus" target="_blank" rel="noopener noreferrer">
        <FaSoundcloud />
      </IconLink>
      <IconLink href="https://github.com/zachhco" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </IconLink>
      <IconLink href="https://members.iracing.com/membersite/member/CareerStats.do" target="_blank" rel="noopener noreferrer">
        <FaCar />
      </IconLink>
    </FooterContainer>
  );
};

export default Footer;
