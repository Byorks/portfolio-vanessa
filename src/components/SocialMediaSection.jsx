import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaInstagram, FaLink } from 'react-icons/fa';

const SectionContainer = styled.section`
  padding: 6rem 0;
  background-color: var(--color-background);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at bottom right, rgba(138, 43, 226, 0.1), transparent 50%);
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

const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const SocialCard = styled(motion.div)`
  background-color: var(--color-card-background);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(138, 43, 226, 0.3);
  }
`;

const CardImage = styled.div`
  height: 200px;
  background-image: ${props => `url(${props.bg})`};
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent 50%, rgba(18, 18, 18, 0.9) 100%);
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--color-text-primary);
`;

const CardDescription = styled.p`
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
`;

const CardLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    
    svg {
      font-size: 1.2rem;
    }
  }
`;

const SocialMediaSection = () => {
  const socialProjects = [
    {
      id: 1,
      title: 'Restaurante Steakya',
      description: 'Gerenciamento de redes sociais para restaurante especializado em carnes, com foco em fotografia de alimentos e promoções.',
      image: './assets/images/logo-steakya.png',
      link: 'https://www.instagram.com/restaurante_steakya/'
    },
    {
      id: 2,
      title: 'Padaria Letícia Vila Madalena',
      description: 'Estratégia de conteúdo e gestão de mídia social para padaria artesanal, destacando produtos frescos e ambiente acolhedor.',
      image: './assets/images/logo-leticia.png',
      link: 'https://www.instagram.com/padarialeticiavilamadalena/'
    },
    {
      id: 3,
      title: 'Congas GNV e Mecânica',
      description: 'Desenvolvimento de presença digital para oficina mecânica especializada em GNV, com foco em serviços técnicos e atendimento.',
      image: './assets/images/logo-congas.png',
      link: 'https://www.instagram.com/congas_gnvemecanica/'
    }
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <SectionContainer id="social-media">
      <SectionContent>
        <SectionTitle
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Social Media
        </SectionTitle>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Criação e gerenciamento de conteúdo para redes sociais, com foco em engajamento e crescimento de audiência.
          Estratégias personalizadas para cada tipo de negócio, valorizando a identidade da marca.
        </motion.p>
        
        <SocialGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {socialProjects.map(project => (
            <SocialCard key={project.id} variants={itemVariants}>
              <CardImage bg={project.image} />
              <CardContent>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
                <CardLinks>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <FaInstagram /> Instagram
                  </a>
                </CardLinks>
              </CardContent>
            </SocialCard>
          ))}
        </SocialGrid>
      </SectionContent>
    </SectionContainer>
  );
};

export default SocialMediaSection;
