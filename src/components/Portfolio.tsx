import React from 'react';
import { motion } from 'motion/react';
import { Camera, Calendar, MapPin, Music } from 'lucide-react';

export default function Portfolio() {
  const works = [
    {
      id: 'port-1',
      title: 'Producción Integral de Iluminación',
      category: 'FESTIVAL DE VERANO 2024',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8jZwQTdAcJIJshYriKudSOB5eqTP1o_mSX-HYPp0PSrmuMx-TzezRFrAcZcw5tZRnyOZEdTdWqodff7Se_rMSUce3lD_ES-f_W3MGoMiH-l6ZErB3u3FlE846b3l_Cb3a1PXxp3kVfSFMWzQuqQQoRyI44nE1WBdXubxeijEvZY79euzAntS3Lkkb2HT9tPy_Y_2EbYr_goqdcFjolPry8Y-kNr_NMN0wB3uY9OWqSdQwir_JJWmN4C1VwN_tZXiIE7dP2KAj572k',
      size: 'lg',
      location: 'Parque Bicentenario, Santiago',
      details: 'Sistemas Line Array L-Acoustics K2 y más de 120 cabezas móviles de alta potencia en red fibra óptica.'
    },
    {
      id: 'port-2',
      title: 'Gala Diamante',
      category: 'EVENTO CORPORATIVO',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBar0Ca55Pw-OOy0R4viVBG7k6jnlIUq4qXpBvZKLO_oKZ0DMeNNFFZCFVqAWW1hJAbxgwvtEIbn7LDZk3lMKQE11uNECPCUregRVswYIqxIPozO1DrX1BpcyuIdulKsP_abVPICfiCLJbxVC15QmvoGSB2XPHLQpTrk3cl3mk1RrGRaguTEIyWG9rWd2RYU4jRpbVUJQXk7KKXOZFlhW2e2s9nKjqX4KtgLnI3BNGCcqrcVKNzcsEGv42qo2V6ZGAy50w9qqfsnx8U',
      size: 'sm',
      location: 'Hotel W Grand Ballroom',
      details: 'Iluminación ambiental decorativa inalámbrica y sonorización acústica de precisión.'
    },
    {
      id: 'port-3',
      title: 'Residency Setup',
      category: 'CLUB NIGHTS',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWd5nF5aBIUkExA_ZUREkDnMEVD4l9smacKq-cwgTaCsnE71wnPK5yiUQxdAUk2xUQ8hwWfLMI2rONxjibD8jAimexT7W0WvKmEWX8dY0mA_IYU2WW_Nnf3CyMT501q6GwALObwAjJ8_Ek8KptpOBkLVxe6F79jwV7CCvy71zp2BxyLXsSQtFKCHSYFtwYv94GYe81doRLxmRh8vdjOmlD9Wh_p2rNdoKRukETSbrYOstXizAoELNXwPyhR25M-m3dz-Kf_F1m4Q6X',
      size: 'sm',
      location: 'Club Noir, Las Condes',
      details: 'Láseres RGB sincronizados con código de tiempo SMPTE y equipamiento de DJ nivel Rider Pioneer.'
    }
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
      <div className="text-center mb-16">
        <span className="font-display text-xs text-rust tracking-[0.25em] font-normal block mb-2 uppercase">SOLUCIONES REALIZADAS</span>
        <h2 className="font-display text-3xl sm:text-5xl text-primary mb-4 uppercase">Eventos Destacados</h2>
        <p className="font-sans text-brand-text/60 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
          Nuestra huella de luz y sonido en las producciones más espectaculares del país. Escenarios transformados con precisión quirúrgica.
        </p>
      </div>

      {/* Grid Layout matches original page */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Large item occupies 2 columns */}
        {works.filter(w => w.size === 'lg').map(work => (
          <div 
            key={work.id} 
            className="lg:col-span-2 relative h-[500px] md:h-[600px] overflow-hidden group rounded-md glass-card"
          >
            {/* Background image zoom element */}
            <img 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out opacity-75" 
              alt={work.title} 
              src={work.image}
              referrerPolicy="no-referrer"
            />
            {/* Ambient gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/30 to-transparent z-10 transition-colors group-hover:from-brand-bg/90" />
            
            {/* Content info absolute */}
            <div className="absolute bottom-8 left-8 right-8 z-20">
              <span className="font-display text-xs text-rust font-normal bg-rust/10 border border-rust/30 px-3 py-1 rounded-sm tracking-widest uppercase inline-block mb-3">
                {work.category}
              </span>
              <h3 className="font-display text-2xl sm:text-4xl text-primary mb-2 uppercase">
                {work.title}
              </h3>
              
              <div className="flex flex-col sm:flex-row gap-4 text-xs text-brand-text/60 mb-3 font-sans font-normal opacity-80">
                <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-rust-dark" /> {work.location}</span>
                <span className="flex items-center gap-1.5 hidden sm:inline-flex"><Camera className="w-3.5 h-3.5 text-sky-blue" /> Direct Video Available</span>
              </div>
              
              {/* Extra hover details */}
              <p className="font-sans text-sm text-brand-text/80 max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500 ease-in-out">
                {work.details}
              </p>
            </div>
          </div>
        ))}

        {/* Small items container - 1 column containing 2 stacked rows */}
        <div className="grid grid-rows-2 gap-8 h-[500px] md:h-[600px]">
          {works.filter(w => w.size === 'sm').map(work => (
            <div 
              key={work.id} 
              className="relative overflow-hidden group rounded-md glass-card"
            >
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out opacity-75" 
                alt={work.title} 
                src={work.image}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/30 to-transparent z-10" />
              
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <span className="font-display text-[10px] text-electric-blue font-normal tracking-widest uppercase block mb-1">
                  {work.category}
                </span>
                <h3 className="font-display text-lg md:text-xl text-primary mb-1 uppercase">
                  {work.title}
                </h3>
                <span className="font-sans text-[10px] text-brand-text/40 block mb-2 font-normal">{work.location}</span>
                
                <p className="font-sans text-xs text-brand-text/70 max-h-0 overflow-hidden group-hover:max-h-12 transition-all duration-500 ease-in-out font-normal">
                  {work.details}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
