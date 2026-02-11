import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import lineImg from '../assets/images/logo-linesync.png';
import voxMidiaImg from '../assets/images/vox-1.webp';

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
    background: radial-gradient(circle at top left, rgba(0, 255, 255, 0.1), transparent 50%);
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: var(--color-card-background);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 255, 255, 0.2);
  }
`;

const CardImage = styled.div`
  height: 220px;
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

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background-color: rgba(138, 43, 226, 0.2);
  color: var(--color-accent);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
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

const DevelopmentSection = () => {
  const webProjects = [
    {
      id: 1,
      title: 'Arms Fitness',
      description: 'Site desenvolvido para academia com foco em serviços de personal trainer e planos de treinamento personalizados.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      link: 'https://www.armsfitness.com.br/',
      github: null,
      tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design']
    },
    {
      id: 2,
      title: 'GamificaTudo',
      description: 'Website sobre gamificação, apresentando conceitos e aplicações práticas em diferentes contextos.',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      link: 'https://byorks.github.io/Website-GamificaTudo/',
      github: 'https://github.com/Byorks/Website-GamificaTudo',
      tech: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages']
    },
    {
      id: 3,
      title: 'LineSync',
      description: 'Projeto desenvolvido em parceria com a Labware, focado no redesign da plataforma LineSync, com melhorias em integrações, arquitetura de interface e evolução da experiência do usuário (UI/UX).',
      image: lineImg,
      link: 'https://byorks.github.io/website-linesync/',
      github: 'https://github.com/Byorks/website-linesync',
      tech: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS']
    },
 {
  id: 3,
  title: 'Vox Mídia – Website Institucional',
  description:
    'Website institucional desenvolvido para a agência Vox Mídia, destacando estratégia de marca, posicionamento e proposta de valor. O projeto focou em estruturação clara de conteúdo, hierarquia visual e experiência moderna, reforçando inovação, tecnologia e consultoria multimídia.',
  image: voxMidiaImg, 
  link: 'https://website-vox-midia.vercel.app/',
  github: 'https://github.com/Byorks/Website-Vox-Midia',
  tech: ['React', 'TailwindCSS','HTML', 'CSS', 'JavaScript']
}

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
    <SectionContainer id="desenvolvimento">
      <SectionContent>
        <SectionTitle
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Desenvolvimento Web
        </SectionTitle>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Criação de websites e aplicações web com foco em experiência do usuário, 
          performance e design responsivo. Desenvolvimento de soluções personalizadas 
          para diferentes necessidades e objetivos.
        </motion.p>
        
        <ProjectsGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {webProjects.map(project => (
            <ProjectCard key={project.id} variants={itemVariants}>
              <CardImage bg={project.image} />
              <CardContent>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
                
                <TechStack>
                  {project.tech.map((tech, index) => (
                    <TechTag key={index}>{tech}</TechTag>
                  ))}
                </TechStack>
                
                <CardLinks>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Ver Site
                  </a>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub /> Código
                    </a>
                  )}
                </CardLinks>
              </CardContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </SectionContent>
    </SectionContainer>
  );
};

export default DevelopmentSection;
