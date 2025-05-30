import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGamepad, FaCode, FaGraduationCap, FaVolleyballBall, FaBook } from 'react-icons/fa';
import { GiKimono } from 'react-icons/gi';

const SectionContainer = styled.section`
  padding: 6rem 0;
  background-color: var(--color-background);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center right, rgba(0, 255, 255, 0.1), transparent 60%);
    z-index: 0;
  }
`;

const SectionContent = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled(motion.h2)`
  margin-bottom: 3rem;
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const AboutText = styled(motion.div)`
  flex: 1;
`;

const AboutParagraph = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

const AboutEmoji = styled.span`
  font-size: 1.5rem;
  display: inline-block;
  margin-top: 1rem;
`;

const InterestsContainer = styled(motion.div)`
  flex: 1;
  background-color: var(--color-card-background);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

const InterestsTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: var(--color-text-primary);
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 40px;
    height: 3px;
    background: var(--color-primary);
  }
`;

const InterestsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1.5rem;
`;

const InterestItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const InterestIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: var(--color-text-primary);
`;

const InterestName = styled.p`
  font-size: 1rem;
  color: var(--color-text-secondary);
`;

const AboutSection = () => {
  const interests = [
    { name: 'Programação', icon: <FaCode /> },
    { name: 'Jogos Digitais', icon: <FaGamepad /> },
    { name: 'Desenho', icon: <FaBook /> },
    { name: 'Vôlei', icon: <FaVolleyballBall /> },
    { name: 'Multimídia', icon: <FaGraduationCap /> },
    { name: 'Jiu-jitsu', icon: <GiKimono /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <SectionContainer id="sobre">
      <SectionContent>
        <SectionTitle
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Sobre Mim
        </SectionTitle>
        
        <AboutContainer>
          <AboutText
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <AboutParagraph>
              Adoro conhecer mais sobre programação e artes em jogos digitais, meu foco tem sido C#.
            </AboutParagraph>
            
            <AboutParagraph>
              Atualmente estou cursando Multimídia e concluí um curso de Fundamentos em C# também no SENAI, 
              gosto bastante de ambos e graças a esse conhecimento me identifiquei com a área.
            </AboutParagraph>
            
            <AboutParagraph>
              Meu atual objetivo é me aprofundar na parte de programação e atuar na área.
            </AboutParagraph>
            
            <AboutParagraph>
              No tempo livre, gosto de desenhar, ler, praticar vôlei e jogar videogames competitivos e narrativos. 
              Recentemente, comecei a praticar jiu-jitsu, melhorando minha disciplina e resistência.
            </AboutParagraph>
            
            <AboutParagraph>
              Como pode ver, gosto bem variado, mas me empenho em todos.
            </AboutParagraph>
            
            <AboutEmoji>( •̀ ω •́ )✧</AboutEmoji>
          </AboutText>
          
          <InterestsContainer
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <InterestsTitle>Interesses</InterestsTitle>
            
            <InterestsList
              as={motion.div}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {interests.map((interest, index) => (
                <InterestItem key={index} variants={itemVariants}>
                  <InterestIcon>{interest.icon}</InterestIcon>
                  <InterestName>{interest.name}</InterestName>
                </InterestItem>
              ))}
            </InterestsList>
          </InterestsContainer>
        </AboutContainer>
      </SectionContent>
    </SectionContainer>
  );
};

export default AboutSection;
