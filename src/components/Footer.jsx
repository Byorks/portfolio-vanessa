import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  background-color: var(--color-card-background);
  padding: 3rem 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, var(--color-primary), var(--color-accent), var(--color-primary));
  }
`;

const FooterContent = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FooterLogo = styled(motion.div)`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  
  a {
    color: var(--color-text-secondary);
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--color-accent);
    }
  }
`;

const Copyright = styled.p`
  color: var(--color-text-secondary);
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Portfolio
        </FooterLogo>
        
        <FooterLinks>
          <a href="#home">Home</a>
          <a href="#social-media">Social Media</a>
          <a href="#desenvolvimento">Desenvolvimento</a>
          <a href="#branding">Branding</a>
          <a href="#galeria">Galeria</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </FooterLinks>
        
        <Copyright>
          &copy; {new Date().getFullYear()} Portfolio. Todos os direitos reservados.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
