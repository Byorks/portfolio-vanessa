import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaBehance, FaExternalLinkAlt } from "react-icons/fa";

const SectionContainer = styled.section`
  padding: 6rem 0;
  background-color: var(--color-background);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at center,
      rgba(138, 43, 226, 0.05),
      transparent 70%
    );
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

const BrandingShowcase = styled.div`
  margin-top: 3rem;
`;

const BrandingProject = styled(motion.div)`
  background-color: var(--color-card-background);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  margin-bottom: 4rem;
`;

const ProjectHeader = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ProjectImage = styled.div`
  height: 300px;
  flex: 1;
  background-image: ${(props) => `url(${props.bg})`};
  background-size: cover;
  background-position: center;

  @media (min-width: 768px) {
    min-width: 50%;
  }
`;

const ProjectInfo = styled.div`
  padding: 2rem;
  flex: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: var(--color-text-primary);
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
  line-height: 1.8;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  margin-top: 1rem;

  svg {
    font-size: 1.2rem;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
  padding: 0 2rem 2rem;
`;

const GalleryItem = styled(motion.div)`
  height: 180px;
  border-radius: 8px;
  overflow: hidden;
  background-image: ${(props) => `url(${props.bg})`};
  background-size: cover;
  background-position: center;
  // cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const BrandingSection = () => {
  const brandingProjects = [
    {
      title: "BrandBook Vox Midia",
      description:
        "Desenvolvimento completo de identidade visual para a Vox Midia, incluindo logotipo, paleta de cores, tipografia e aplicações. O projeto focou em transmitir modernidade e profissionalismo, alinhados com os valores da empresa de comunicação.",
      mainImage: "/images/vox-1.webp",
      link: "https://www.behance.net/gallery/219285967/BrandBook-Vox-Midia",
      galleryImages: [
        "/images/vox-2.webp",
        "/images/vox-3.webp",
        "/images/vox-4.webp",
        "/images/vox-5.png",
      ],
    },
    {
      title: "BrandBook Oh My Pet!",
      description:
        "Desenvolvimento completo de identidade visual para a Oh My Pet!, organização voltada à adoção responsável de animais resgatados. O projeto incluiu criação de logotipo, definição de paleta de cores, tipografia e aplicações da marca, com foco em transmitir acolhimento, cuidado, amor e compromisso com o bem-estar animal.",
      mainImage: "/images/omp-1.png",
      link: "",
      galleryImages: [
        "/images/omp-2.png",
        "/images/omp-3.png",
        "/images/omp-4.png",
        "/images/omp-5.png",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <SectionContainer id="branding">
      <SectionContent>
        <SectionTitle
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Branding
        </SectionTitle>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Criação de identidade visual e estratégia de marca para empresas que
          buscam se destacar no mercado. Desenvolvimento de elementos visuais
          que transmitem os valores e a personalidade da marca.
        </motion.p>

        <BrandingShowcase>
          {brandingProjects.map((project, i) => (
            <BrandingProject
              as={motion.div}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ProjectHeader>
                <ProjectImage bg={project.mainImage} />
                <ProjectInfo>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  {project.link ? (
                    <ProjectLink
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaBehance /> Ver no Behance
                    </ProjectLink>
                  ) : (
                    ""
                  )}
                </ProjectInfo>
              </ProjectHeader>

              <GalleryGrid
                as={motion.div}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {project.galleryImages.map((image, index) => (
                  <GalleryItem key={index} bg={image} variants={itemVariants} />
                ))}
              </GalleryGrid>
            </BrandingProject>
          ))}
        </BrandingShowcase>
      </SectionContent>
    </SectionContainer>
  );
};

export default BrandingSection;
