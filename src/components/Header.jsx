import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 0;
  z-index: 100;
  transition: background-color 0.3s ease;
  background-color: ${props => props.scrolled ? 'rgba(18, 18, 18, 0.95)' : 'rgba(18, 18, 18, 0.85)'};
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text-primary);
  cursor: pointer;
  letter-spacing: 1px;
`;

const MenuItems = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled(motion.li)`
  position: relative;
  
  a {
    color: var(--color-text-secondary);
    text-decoration: none;
    font-weight: 400;
    font-size: 0.95rem;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--color-text-primary);
    }
    
    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 1px;
      bottom: -3px;
      left: 0;
      background-color: var(--color-text-primary);
      transition: width 0.3s ease;
    }
    
    &:hover::after {
      width: 100%;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: var(--color-text-primary);
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  height: 100vh;
  background-color: var(--color-card-background);
  z-index: 200;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
  
  ul {
    list-style: none;
    margin-top: 3rem;
    
    li {
      margin-bottom: 1.5rem;
      
      a {
        color: var(--color-text-secondary);
        text-decoration: none;
        font-size: 1.1rem;
        font-weight: var(--font-weight-medium);
        transition: color 0.3s ease;
        
        &:hover {
          color: var(--color-text-primary);
        }
      }
    }
  }
`;

const CloseButton = styled.button`
  align-self: flex-end;
  background: transparent;
  border: none;
  color: var(--color-text-primary);
  font-size: 1.5rem;
  cursor: pointer;
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 150;
`;

const Header = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderContainer scrolled={scrolled}>
      <Nav>
        <Logo
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Vanessa Byork
        </Logo>
        
        <MenuItems>
          {['Home', 'Social Media', 'Desenvolvimento', 'Branding', 'Sobre', 'Contato'].map((item, index) => (
            <MenuItem
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a href={`#${item.toLowerCase().replace(' ', '-')}`}>{item}</a>
            </MenuItem>
          ))}
        </MenuItems>
        
        <MobileMenuButton onClick={() => setMobileMenuOpen(true)}>
          ☰
        </MobileMenuButton>
      </Nav>
      
      {mobileMenuOpen && (
        <>
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
          />
          
          <MobileMenu
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
          >
            <CloseButton onClick={() => setMobileMenuOpen(false)}>✕</CloseButton>
            <ul>
              {['Home', 'Social Media', 'Desenvolvimento', 'Branding', 'Sobre', 'Contato'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </MobileMenu>
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
