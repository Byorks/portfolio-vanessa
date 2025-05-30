import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

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
    background: radial-gradient(circle at bottom left, rgba(0, 255, 255, 0.1), transparent 60%);
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

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
`;

const GalleryItem = styled(motion.div)`
  position: relative;
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  
  &:hover {
    .overlay {
      opacity: 1;
    }
  }
`;

const GalleryImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${props => `url(${props.bg})`};
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;
  
  ${GalleryItem}:hover & {
    transform: scale(1.1);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(18, 18, 18, 0.9) 0%, rgba(18, 18, 18, 0.5) 50%, rgba(18, 18, 18, 0.3) 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  &.overlay {
    opacity: 0;
  }
`;

const ImageTitle = styled.h3`
  color: var(--color-text-primary);
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const ImageCategory = styled.p`
  color: var(--color-accent);
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const ImageLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text-primary);
  font-size: 0.9rem;
  background-color: rgba(138, 43, 226, 0.6);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--color-primary);
  }
  
  svg {
    font-size: 1rem;
  }
`;

const LightboxOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const LightboxContent = styled(motion.div)`
  position: relative;
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
  overflow: hidden;
`;

const LightboxImage = styled.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
`;

const LightboxInfo = styled.div`
  padding: 1.5rem;
  background-color: var(--color-card-background);
`;

const LightboxTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const LightboxDescription = styled.p`
  font-size: 1rem;
  color: var(--color-text-secondary);
  margin-bottom: 1rem;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1001;
  
  &:hover {
    background: var(--color-primary);
  }
`;

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const galleryItems = [
    {
      id: 1,
      title: 'Arms Fitness',
      category: 'Desenvolvimento Web',
      image: '/images/logo-arms.png',
      link: 'https://www.armsfitness.com.br/',
      description: 'Site desenvolvido para academia com foco em serviços de personal trainer e planos de treinamento personalizados.'
    },
    {
      id: 2,
      title: 'GamificaTudo',
      category: 'Desenvolvimento Web',
      image: '/images/logo-gamificatudo.png',
      link: 'https://byorks.github.io/Website-GamificaTudo/',
      description: 'Website de estudos sobre gamificação, apresentando conceitos e aplicações práticas em diferentes contextos.'
    },
    {
      id: 3,
      title: 'BrandBook Vox Midia',
      category: 'Branding',
      image: '/images/vox-1.webp',
      link: 'https://www.behance.net/gallery/219285967/BrandBook-Vox-Midia',
      description: 'Desenvolvimento completo de identidade visual para a Vox Midia, incluindo logotipo, paleta de cores, tipografia e aplicações.'
    },
    {
      id: 4,
      title: 'Restaurante Steakya',
      category: 'Social Media',
      image: '/images/logo-steakya.png',
      link: 'https://www.instagram.com/restaurante_steakya/',
      description: 'Gerenciamento de redes sociais para restaurante especializado em carnes, com foco em fotografia de alimentos e promoções.'
    },
    {
      id: 5,
      title: 'Padaria Letícia',
      category: 'Social Media',
      image: '/images/logo-leticia.png',
      link: 'https://www.instagram.com/padarialeticiavilamadalena/',
      description: 'Estratégia de conteúdo e gestão de mídia social para padaria artesanal, destacando produtos frescos e ambiente acolhedor.'
    },
    {
      id: 6,
      title: 'Congas GNV',
      category: 'Social Media',
      image: '/images/logo-congas.png',
      link: 'https://www.instagram.com/congas_gnvemecanica/',
      description: 'Desenvolvimento de presença digital para oficina mecânica especializada em GNV, com foco em serviços técnicos e atendimento.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
    <SectionContainer id="galeria">
      <SectionContent>
        <SectionTitle
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Galeria de Projetos
        </SectionTitle>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore meus projetos em diferentes áreas, desde desenvolvimento web até branding e social media.
          Clique nas imagens para ver mais detalhes e acessar os links.
        </motion.p>
        
        <GalleryGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {galleryItems.map(item => (
            <GalleryItem 
              key={item.id}
              variants={itemVariants}
              onClick={() => setSelectedImage(item)}
            >
              <GalleryImage bg={item.image} />
              <ImageOverlay className="overlay">
                <ImageTitle>{item.title}</ImageTitle>
                <ImageCategory>{item.category}</ImageCategory>
                <ImageLink href={item.link} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
                  <FaExternalLinkAlt /> Ver Projeto
                </ImageLink>
              </ImageOverlay>
            </GalleryItem>
          ))}
        </GalleryGrid>
        
        <AnimatePresence>
          {selectedImage && (
            <LightboxOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <LightboxContent
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={e => e.stopPropagation()}
              >
                <CloseButton onClick={() => setSelectedImage(null)}>
                  <FaTimes />
                </CloseButton>
                <LightboxImage src={selectedImage.image} alt={selectedImage.title} />
                <LightboxInfo>
                  <LightboxTitle>{selectedImage.title}</LightboxTitle>
                  <LightboxDescription>{selectedImage.description}</LightboxDescription>
                  <ImageLink href={selectedImage.link} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Ver Projeto
                  </ImageLink>
                </LightboxInfo>
              </LightboxContent>
            </LightboxOverlay>
          )}
        </AnimatePresence>
      </SectionContent>
    </SectionContainer>
  );
};

export default GallerySection;
