import React from 'react';
import { Mail, Phone, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface-card pt-[60px] pb-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Column 1: Info and brand statement */}
        <div className="md:col-span-2 space-y-4">
          <div className="font-display text-2xl text-primary tracking-tight uppercase">
            Felipe Caro Producciones
          </div>
          
          <p className="text-brand-text/70 text-sm font-sans">
            Háblanos, contáctanos y cotiza.
          </p>

          <p className="text-brand-text/70 text-sm font-sans">
            <a 
              href="https://wa.me/56997412482" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-primary" /> +56 9 97412482
            </a>
          </p>

          <p className="text-brand-text/70 text-sm font-sans">
            <a 
              href="https://www.instagram.com/fcp.producciontecnica/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary transition-colors inline-flex items-center gap-2"
            >
              <Instagram className="w-4 h-4 text-primary" /> fcp.producciontecnica
            </a>
          </p>

          <p className="text-brand-text/70 text-sm font-sans">
            <a 
              href="mailto:felipecaro@felipecaroproducciones.com" 
              className="hover:text-primary transition-colors inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-primary" /> felipecaro@felipecaroproducciones.com
            </a>
          </p>

          <p className="text-brand-text/70 text-sm font-sans max-w-sm leading-relaxed">
            La excelencia no es una opción, es nuestro estándar absoluto.
          </p>
        </div>

        {/* Column 2: Legal & info Column */}
        <div>
          <h4 className="font-display text-xs text-primary font-normal tracking-widest uppercase mb-6">LEGAL & INFO</h4>
          <ul className="space-y-4 font-sans text-xs sm:text-sm text-brand-text/60">
            <li><a href="#" className="hover:text-neon-pink hover:underline transition-all">Terms of Service</a></li>
            <li><a href="#" className="hover:text-neon-pink hover:underline transition-all">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-neon-pink hover:underline transition-all">Rental Agreement (Contrato)</a></li>
            <li className="hover:text-neon-pink transition-colors">Atención y Soporte Técnico</li>
          </ul>
        </div>

      </div>

      {/* Credits footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-0 pt-8 flex flex-col items-center gap-3 text-[10px] font-sans text-brand-text/40 tracking-wider font-normal text-center">
        <div className="flex gap-8 uppercase">
          <span>Santiago de Chile</span>
          <span>Design By DYST</span>
        </div>
        <div className="uppercase font-sans">
          © 2026 Felipe Caro Producciones. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
