import React from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialMediaSection from './components/SocialMediaSection';
import DevelopmentSection from './components/DevelopmentSection';
import BrandingSection from './components/BrandingSection';
import GallerySection from './components/GallerySection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <Hero />
        <SocialMediaSection />
        <DevelopmentSection />
        <BrandingSection />
        <GallerySection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

createRoot(document.getElementById('root')).render(<App />);
