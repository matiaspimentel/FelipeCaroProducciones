import React from 'react';
import { motion } from 'motion/react';
import { Bolt, CheckCircle2, ShieldAlert, Award, Clock } from 'lucide-react';

export default function WhyUs() {
  return (
    <section className="bg-surface-card py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main big info box */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 bg-surface-deep p-8 md:p-12 rounded-md flex flex-col justify-center"
          >
            <span className="font-display text-xs text-gold-leaf tracking-[0.25em] font-normal block mb-4 uppercase">
              FELIPE CARO PRODUCCIONES
            </span>
            <h2 className="font-display text-3xl sm:text-5xl text-primary mb-6 max-w-2xl leading-tight uppercase">
              Soporte técnico impecable y tecnología de nivel internacional
            </h2>
            <p className="font-sans text-brand-text/80 text-sm md:text-base mb-8 max-w-3xl leading-relaxed font-normal">
              Llevamos más de 20 años ofreciendo un servicio de excelencia bajo una modalidad boutique "guante blanco" (white-glove service). No somos solo una empresa de arriendo de equipos; somos tus colaboradores técnicos en el escenario, planificando la distribución DMX, calibrando el espectro de radiofrecuencias de tus micrófonos y optimizando la acústica en tiempo récord.
            </p>
            
            {/* Numeric Indicators */}
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 pt-4 border-t border-white/10">
              <div className="flex items-center gap-4">
                <div className="text-4xl sm:text-5xl font-display text-primary">500+</div>
                <div>
                  <div className="font-display text-[10px] text-gold-leaf tracking-wider uppercase font-normal">Producciones</div>
                  <div className="text-xs text-brand-text/60 font-normal font-sans">Exitosas a Nivel Nacional</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-4xl sm:text-5xl font-display text-primary">24/7</div>
                <div>
                  <div className="font-display text-[10px] text-gold-leaf tracking-wider uppercase font-normal">Respuesta</div>
                  <div className="text-xs text-brand-text/60 font-normal font-sans">Soporte y Reemplazo Técnico</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-4xl sm:text-5xl font-display text-primary">20+</div>
                <div>
                  <div className="font-display text-[10px] text-gold-leaf tracking-wider uppercase font-normal">Años de Elite</div>
                  <div className="text-xs text-brand-text/60 font-normal font-sans">Trayectoria Ininterrumpida</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Side stacked boxes */}
          <div className="lg:col-span-4 grid grid-rows-2 gap-8">
            
            {/* Box 1: Montaje Rápido */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-rust-dark p-8 rounded-md flex flex-col justify-between group cursor-pointer overflow-hidden relative"
            >
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-xl md:text-2xl text-primary mb-2 uppercase">Montaje Rápido</h3>
                <p className="text-xs md:text-sm text-primary/80 leading-relaxed">
                  Logística optimizada y simulaciones previas para reducir los tiempos de instalación de truss e iluminación en un 40%.
                </p>
              </div>
              <div className="absolute -bottom-8 -right-8 opacity-10 group-hover:scale-125 transition-transform duration-750">
                <Clock className="w-32 h-32" />
              </div>
            </motion.div>

            {/* Box 2: Certificación y Mantenimiento */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-electric-blue p-8 rounded-md flex flex-col justify-between group cursor-pointer overflow-hidden relative"
            >
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-xl md:text-2xl text-primary mb-2 uppercase">Certificación Técnica</h3>
                <p className="text-xs md:text-sm text-primary/80 leading-relaxed">
                  Todos nuestros amplificadores, consolas y luminarias móviles se prueban individualmente en banco de servicio antes y después de cada show.
                </p>
              </div>
              <div className="absolute -bottom-8 -right-8 opacity-10 group-hover:scale-125 transition-transform duration-750">
                <Award className="w-32 h-32" />
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
