import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaInstagram, FaBehance } from 'react-icons/fa';

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
    background: radial-gradient(circle at top left, rgba(138, 43, 226, 0.1), transparent 60%);
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

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ContactForm = styled(motion.div)`
  flex: 1;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--color-text-secondary);
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  background-color: var(--color-card-background);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  color: var(--color-text-primary);
  font-family: 'Poppins', sans-serif;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  background-color: var(--color-card-background);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  color: var(--color-text-primary);
  font-family: 'Poppins', sans-serif;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  box-shadow: 0 4px 15px rgba(138, 43, 226, 0.3);
  width: 100%;
`;

const ContactInfo = styled(motion.div)`
  flex: 1;
  background-color: var(--color-card-background);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

const ContactTitle = styled.h3`
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

const ContactText = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(138, 43, 226, 0.2);
  color: var(--color-text-primary);
  font-size: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--color-primary);
    transform: translateY(-5px);
  }
`;

const ContactSection = () => {
  return (
    <SectionContainer id="contato">
      <SectionContent>
        <SectionTitle
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contato
        </SectionTitle>
        
        <ContactContainer>
          <ContactForm
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <FormGroup>
              <Label htmlFor="name">Nome</Label>
              <Input type="text" id="name" placeholder="Seu nome" />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Seu email" />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="subject">Assunto</Label>
              <Input type="text" id="subject" placeholder="Assunto da mensagem" />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="message">Mensagem</Label>
              <Textarea id="message" placeholder="Sua mensagem"></Textarea>
            </FormGroup>
            
            <SubmitButton>Enviar Mensagem</SubmitButton>
          </ContactForm>
          
          <ContactInfo
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ContactTitle>Vamos Conversar</ContactTitle>
            
            <ContactText>
              Estou disponível para novos projetos e oportunidades. 
              Entre em contato para discutirmos como posso ajudar a 
              transformar suas ideias em realidade.
            </ContactText>
            
            <ContactText>
              Você pode me encontrar nas redes sociais ou enviar uma 
              mensagem diretamente pelo formulário.
            </ContactText>
            
            <SocialLinks>
              <SocialLink href="https://github.com/Byorks" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </SocialLink>
              <SocialLink href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </SocialLink>
              <SocialLink href="https://www.behance.net/gallery/219285967/BrandBook-Vox-Midia" target="_blank" rel="noopener noreferrer">
                <FaBehance />
              </SocialLink>
              <SocialLink href="mailto:vanessabyorkwing@gmail.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope />
              </SocialLink>
            </SocialLinks>
          </ContactInfo>
        </ContactContainer>
      </SectionContent>
    </SectionContainer>
  );
};

export default ContactSection;
