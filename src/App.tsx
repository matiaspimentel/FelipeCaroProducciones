/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Footer from './components/Footer';
import whatsappIcon from './imagenes/whatsapp-icon-design.png';
import logoHeader from './imagenes/logo header.png';

export default function App() {
  const [headerOpacity, setHeaderOpacity] = React.useState(0);
  const [whatsappOpacity, setWhatsappOpacity] = React.useState(0);
  const [headerLogoLoaded, setHeaderLogoLoaded] = React.useState(false);

  React.useEffect(() => {
    let timeout: number;
    const handleScroll = () => {
      // Keep existing scroll tracker helper
      document.body.classList.add('is-scrolling');
      window.clearTimeout(timeout);
      timeout = window.setTimeout(() => {
        document.body.classList.remove('is-scrolling');
      }, 1000);

      // Scroll state to toggle navigation sticky bar visibility smoothly based on scroll height
      const currentScroll = window.scrollY;
      
      // Header opacity (min 10 to max 400)
      const minHeader = 10;
      const maxHeader = 400;
      if (currentScroll <= minHeader) {
        setHeaderOpacity(0);
      } else if (currentScroll >= maxHeader) {
        setHeaderOpacity(1);
      } else {
        const fraction = (currentScroll - minHeader) / (maxHeader - minHeader);
        setHeaderOpacity(fraction);
      }

      // WhatsApp opacity - Fades in much faster (max opacity at 120px)
      const minWa = 10;
      const maxWa = 120;
      if (currentScroll <= minWa) {
        setWhatsappOpacity(0);
      } else if (currentScroll >= maxWa) {
        setWhatsappOpacity(1);
      } else {
        const fraction = (currentScroll - minWa) / (maxWa - minWa);
        setWhatsappOpacity(fraction);
      }
    };
    
    // Listen to scroll events
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="app-root-container" className="min-h-screen bg-brand-bg text-brand-text flex flex-col justify-between selection:bg-rust selection:text-brand-bg relative">
      {/* Sticky Top Header with Brand Name */}
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-brand-bg shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
        style={{
          opacity: headerOpacity,
          pointerEvents: headerOpacity > 0 ? 'auto' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 cursor-pointer select-none"
            title="Ir al inicio"
          >
            <img 
              src={logoHeader} 
              alt="Logo" 
              draggable="false"
              onLoad={() => setHeaderLogoLoaded(true)}
              className={`h-7 md:h-8 w-auto object-contain select-none pointer-events-none transition-opacity duration-300 ease-out ${
                headerLogoLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
            <span className="font-display font-normal text-base md:text-lg text-primary tracking-wider uppercase opacity-90">
              FelipeCaroProducciones
            </span>
          </div>
        </div>
      </header>

      {/* Primary Dynamic Screen View router simplified to Home only */}
      <main className="flex-1 w-full">
        <div className="space-y-0">
          {/* Elegant Hero Cover and introduction */}
          <Hero />
          {/* About us / Who we are overview */}
          <AboutUs />
          {/* Visual services segment */}
          <Services />
        </div>
      </main>

      {/* Floating WhatsApp contact button */}
      <a
        id="whatsapp-floating-button"
        href="https://wa.me/56997412482"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer group"
        title="Contactar por WhatsApp"
        style={{
          opacity: whatsappOpacity * 0.9,
          pointerEvents: whatsappOpacity > 0 ? 'auto' : 'none',
        }}
      >
        <span className="absolute right-full mr-3 bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none font-sans font-medium tracking-wide">
          Chatea con nosotros
        </span>
        <img
          src={whatsappIcon}
          alt="WhatsApp"
          className="w-full h-full object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] hover:drop-shadow-[0_8px_18px_rgba(0,0,0,0.7)] transition-all duration-300"
          referrerPolicy="no-referrer"
        />
      </a>

      {/* Footer component */}
      <Footer />
    </div>
  );
}
