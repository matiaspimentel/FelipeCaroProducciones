import React from 'react';
import { Sparkles, Play, Shield, ArrowRight, Zap, Volume2, PocketKnife, Music } from 'lucide-react';
import { motion } from 'motion/react';
import partyImg from '../imagenes/party.jpg';
import backgroundImg from '../imagenes/background.jpg';
import diploVideo from '../videos/diplo.mp4';

export default function Services() {
  const [partyLoaded, setPartyLoaded] = React.useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="relative pt-[60px] pb-[60px] z-20">
      {/* Background image layer with 80% opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 pointer-events-none"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      />
      {/* Dark semi-transparent overlay to ensure excellent readability of white text */}
      <div className="absolute inset-0 bg-black/80 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Services Title and Intro */}
        <div className="mb-[60px] text-center">
          <h2 className="font-display text-3xl sm:text-5xl text-primary uppercase">Nuestros Servicios</h2>
        </div>

        {/* Main Categories Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
        {/* Category 1: Lighting & Special FX */}
        <motion.div variants={itemVariants}>
          <div className="relative overflow-hidden rounded-md mb-8 glass-card aspect-video hover:neon-glow-blue group transition-all duration-500">
            <img 
              className={`w-full h-full object-cover object-[center_38%] hover:scale-105 transition-all duration-700 cursor-pointer ${
                partyLoaded ? 'opacity-65' : 'opacity-0 scale-95'
              }`} 
              alt="Cabezal móvil para iluminación profesional"
              src={partyImg}
              onLoad={() => setPartyLoaded(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
              <h3 className="font-display text-2xl md:text-3xl text-primary uppercase">Luces y Atmosfera</h3>
            </div>
          </div>

          {/* Subfeatures */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 bg-surface-deep rounded-md transition-all">
              <div className="flex items-center gap-2 mb-2">
                <h4 className="font-display font-normal text-lg tracking-wide text-primary uppercase">Cabezas Móviles</h4>
              </div>
              <p className="font-sans text-xs text-brand-text/70 leading-relaxed font-normal">
                Beams súper colosales, spots definidos y washes de amplio rango RGBW de última generación.
              </p>
            </div>

            <div className="p-6 bg-surface-deep rounded-md transition-all">
              <div className="flex items-center gap-2 mb-2">
                <h4 className="font-display font-normal text-lg tracking-wide text-primary uppercase">Efectos Especiales</h4>
              </div>
              <p className="font-sans text-xs text-brand-text/70 leading-relaxed font-normal">
                Máquinas de humo Hazer, ráfagas verticales Geyser, lanzadores de CO2 y láseres RGB Kvant.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Category 2: Audio & Backline */}
        <motion.div variants={itemVariants}>
          <div className="relative overflow-hidden rounded-md mb-8 glass-card aspect-video hover:neon-glow-rust group transition-all duration-500 bg-black/40">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover hover:scale-105 transition-all duration-700 cursor-pointer opacity-65"
            >
              <source src={diploVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
              <h3 className="font-display text-2xl md:text-3xl text-primary uppercase">Backline</h3>
            </div>
          </div>

          {/* Subfeatures */}
          <div className="grid grid-cols-1 gap-4">
            <div className="p-6 bg-surface-deep rounded-md transition-all">
              <div className="flex items-center gap-2 mb-2">
                <h4 className="font-display font-normal text-lg tracking-wide text-primary uppercase">Sistemas PA & Touring</h4>
              </div>
              <p className="font-sans text-xs text-brand-text/70 leading-relaxed font-normal">
                Sistemas de line-array L-Acoustics K2, consolas de audio Yamaha CL5 y monitoreo in-ear Shure PSM1000.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
  );
}
