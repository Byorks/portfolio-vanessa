import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaBehance } from 'react-icons/fa';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at top right, rgba(138, 43, 226, 0.2), transparent 50%),
                radial-gradient(circle at bottom left, rgba(0, 255, 255, 0.1), transparent 50%);
    z-index: -1;
  }
`;

const HeroContent = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 1;
`;

const HeroText = styled(motion.div)`
  max-width: 600px;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: var(--color-accent);
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.8;
`;

const CallToAction = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: 1rem;
  margin-right: 1rem;
  box-shadow: 0 4px 15px rgba(138, 43, 226, 0.3);
`;

const SecondaryButton = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: 1rem;
  background: transparent;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  
  &:hover {
    background: var(--color-primary);
    color: var(--color-text-primary);
  }
`;

const SocialIcons = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 3rem;
  
  a {
    color: var(--color-text-secondary);
    font-size: 1.5rem;
    transition: all 0.3s ease;
    
    &:hover {
      color: var(--color-accent);
      transform: translateY(-5px);
    }
  }
`;

const TypedText = styled.span`
  position: relative;
  
  &::after {
    content: '|';
    position: absolute;
    right: -8px;
    animation: blink 1s infinite;
  }
  
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroContent>
        <HeroText
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Desenvolvedora Web & <br />
            Designer
          </motion.h1>
          
          <Subtitle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <TypedText>Criando experiências digitais inovadoras</TypedText>
          </Subtitle>
          
          <Description
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Adoro conhecer mais sobre programação e artes em jogos digitais, meu foco tem sido C#.
            Atualmente estou cursando Multimídia e concluí um curso de Fundamentos em C# também no SENAI.
          </Description>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <CallToAction>Ver Portfólio</CallToAction>
            <SecondaryButton>Contato</SecondaryButton>
          </motion.div>
          
          <SocialIcons
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <a href="https://github.com/Byorks" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            {/* <a href="https://www.instagram.com/restaurante_steakya/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a> */}
            <a href="https://www.behance.net/gallery/219285967/BrandBook-Vox-Midia" target="_blank" rel="noopener noreferrer">
              <FaBehance />
            </a>
          </SocialIcons>
        </HeroText>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
