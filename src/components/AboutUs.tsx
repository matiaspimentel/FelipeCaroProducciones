import React from 'react';
import { motion } from 'motion/react';

export default function AboutUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  };

  return (
    <section className="pt-12 pb-12 bg-[#deded6] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Header & Main Info */}
          <motion.div variants={itemVariants} className="lg:col-span-7 pt-0 lg:pt-[38px] text-[#0A0A0A]">
            <h2 className="font-display text-[48px] text-[#0A0A0A] uppercase mb-8 leading-none tracking-tight">
              ¿Quiénes somos?
            </h2>
            <div className="space-y-6">
              <p className="font-sans text-[#0A0A0A] text-base sm:text-lg md:text-xl font-normal leading-relaxed">
                Somos una empresa de gran trayectoria en la planificación y realización de eventos sociales y empresariales. Gozamos de una privilegiada red de convenios con organizaciones varias, para asegurarnos de poder ofrecer el mejor servicio particular posible para su evento.
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div variants={itemVariants} className="lg:col-span-5">
            <div className="bg-surface-deep p-8 sm:p-10 rounded-md shadow-[0_20px_40px_rgba(0,0,0,0.35)] relative overflow-hidden group">
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-rust-dark/5 via-transparent to-transparent opacity-50 pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="font-display text-xl sm:text-2xl text-primary uppercase mb-4 tracking-wider">
                  Nuestra misión
                </h3>
                
                <p className="font-sans text-brand-text/80 text-sm sm:text-base font-normal leading-relaxed">
                  Nuestra misión es satisfacer los deseos de nuestros clientes brindando el equipo y la ayuda necesaria para construir su evento. Para ello ofrecemos servicios y facilidades para diferentes niveles de presupuestos, lo que significa una ventaja y oportunidad de elección para nuestros contratantes.
                </p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
