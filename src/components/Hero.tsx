import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, List, ChevronDown } from 'lucide-react';
import logoImg from '../imagenes/FCP_transparente.png';
import videoBg from '../videos/party 1.mp4';

export default function Hero() {
  const [logoLoaded, setLogoLoaded] = React.useState(false);

  return (
    <header className="relative min-h-screen flex items-start justify-center overflow-hidden pt-20 md:pt-32">
      {/* Background container */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/20 via-brand-bg/50 to-brand-bg z-10" />
        <div className="absolute inset-0 hero-gradient z-10 opacity-40" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-90"
        >
          <source src={videoBg} type="video/mp4" />
        </video>
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6 md:space-y-8"
        >
          {/* Logo Image */}
          <div className="flex justify-center mb-16 mt-[-80px] translate-y-10">
            <img 
              src={logoImg} 
              alt="LFCP Audio e Iluminación" 
              draggable="false"
              onLoad={() => setLogoLoaded(true)}
              className={`h-44 md:h-60 w-auto object-contain mix-blend-screen contrast-[105%] drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] select-none pointer-events-none transition-all duration-700 ease-out ${
                logoLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            />
          </div>

          {/* Heading */}
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-6xl text-primary max-w-5xl mx-auto leading-tight md:leading-tight tracking-tight uppercase mt-40">
            Empresa con larga trayectoria <br className="hidden md:block" />
            <span className="text-rust-dark font-bold">
              en Audio e Iluminación
            </span>
          </h1>
        </motion.div>
      </div>

    </header>
  );
}
