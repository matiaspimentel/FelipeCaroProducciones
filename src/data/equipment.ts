import { EquipmentItem } from '../types';

export const EQUIPMENT_CATALOG: EquipmentItem[] = [
  // --- ILUMINACION ---
  {
    id: 'lum-001',
    name: 'Clay Paky Sharpy Plus',
    category: 'iluminacion',
    subcategory: 'Cabezas Móviles',
    brand: 'Clay Paky',
    rate: 150,
    description: 'Cabeza móvil híbrida (Beam/Spot) extremadamente rápida con lámpara de arco de 330W. Proyecciones definidas y arco colosal. Ideal para grandes estadios.',
    specs: ['330W Arc Lamp', '2D / 3D Beam', 'CMY Color Mix', '16-bit Dimming', 'DMX Channels: 31'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBATlhuU39yruznUgPrmUXn22AcyLCevmhMXbwCu4pyig5Ksdjfc03tuNjuLVevP-4DYeU1no9oewL_0u8cDkeakoUNs7FaqFU_HgXhG129Ij9c4mHXYN4sMoOwdTZbUU3IiFm2OxdAZjRJyfIZ3-292cCFq1AGvSZ7yBewNlXe71OD0NCjfGbgFk3cYvLsugY1PKeG1-yYE_6Z5Cjr6wxQYLVsr-kDwmPCJ69ea7SegMpMqVeVfgeNljLSVsa1dotSrO3HskXgWOqx',
    glowingColor: 'blue',
    featured: true
  },
  {
    id: 'lum-002',
    name: 'Martin MAC Aura PXL',
    category: 'iluminacion',
    subcategory: 'Cabezas Móviles Wash',
    brand: 'Martin',
    rate: 120,
    description: 'Luminaria Wash de alta potencia con control de píxel individual y el característico efecto Aura. Colores ultra saturados y movimiento veloz.',
    specs: ['19 x 40W LED', 'Aura Backlight Effect', 'DMX Channels: 17/89', 'Zoom 1:5 (5°-50°)', 'Pixel Mapping'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPpTXP5VAl6V0GsqjyCu5w2hEYTlrtfz0TD6eDUcgXMOWK1XKkJiO5QVMUZQldsXX4OYIX8oWbgGc6BZIRA3KrTbrOYEJZHQAjLNBonUqN-v5jWelamcryg6zV4-wM0Vs2cnrl3XiLB0nU1LFn3fH75_MGYWuZUfcbtIxScdcaw87ZZQMZTWKZhrKFLAkLJjB8_XtfM7-K485nGQ1nt_0Oec64DHmlszfkfxU-ds4BhQMsXooMDUsxDoNpo-zoCgOfq4j-1vcWZDS9',
    glowingColor: 'pink',
    featured: true
  },
  {
    id: 'lum-003',
    name: 'GrandMA3 Light Console',
    category: 'iluminacion',
    subcategory: 'Consolas DMX',
    brand: 'MA Lighting',
    rate: 450,
    description: 'Estándar de la industria en consolas de iluminación profesional. Control masivo de parámetros en tiempo real con 2 pantallas multitáctiles y faders motorizados.',
    specs: ['8,192 Parameters', 'Dual Multi-touch screens', 'Motorized Faders', 'DMX Ports x6', 'ArtNet / sACN supported'],
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=600',
    glowingColor: 'amber',
    featured: true
  },
  {
    id: 'lum-004',
    name: 'Chauvet Maverick MK Pyxis',
    category: 'iluminacion',
    subcategory: 'Cabezas Especiales',
    brand: 'Chauvet Professional',
    rate: 140,
    description: 'Efecto wash con un haz central de haz (Beam) muy estrecho rodeado por un anillo exterior de píxeles LED controlables individualmente.',
    specs: ['9 x 15W RGBW Outer Ring', '60W RGBW Center Beam', 'Continuous Pan & Tilt', 'Art-Net & sACN'],
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=600',
    glowingColor: 'rust'
  },

  // --- AUDIO ---
  {
    id: 'aud-001',
    name: 'L-Acoustics K2 Line Array Box',
    category: 'audio',
    subcategory: 'Sistemas PA',
    brand: 'L-Acoustics',
    rate: 180,
    description: 'Gabinete line-array activo de 3 vías de alta gama. Presión sonora extrema y dispersión horizontal de primer nivel para escenarios al aire libre y arenas.',
    specs: ['Max SPL 147 dB', 'LF: 2x 12" Neodymium', 'Panflex Directivity Control', 'Dolly & Rigging kits', 'Frequency: 35Hz-20kHz'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAx0CNf6ZVFP68WX4ToTG0Vzcq_pZI7vElHmPc-9d_-tJ1F4qk8IUhpatkbPo2veZHpUXFL2y2RZ5ZxQz_nSaOJGhxHkqXdn-tVc09PNbn7J9XBKZRs7uTOjfRqdk354Km0WRljmIhsiDoxsIbYzMfCnVjbRpDn464FhOJrNj1DOYf87bgpSMLbzUvm5oUQlH9DRJmGRpZLd4Bj-Bdl0Qlb0s60JNgzw7rwaN_jjLqwBKn1ZjeiOvBFYGE83VFMXLn7AI1BcLwB-vgE',
    glowingColor: 'rust',
    featured: true
  },
  {
    id: 'aud-002',
    name: 'Yamaha CL5 Digital Console',
    category: 'audio',
    subcategory: 'Consolas de Mezcla',
    brand: 'Yamaha',
    rate: 350,
    description: 'Consola mezcladora digital de 72 canales mono y 8 estéreo. Red Dante nativa redundante, efectos Premium rack virtual y confiabilidad excepcional en vivo.',
    specs: ['72 Mono + 8 Stereo Mix', 'Dante Redundancy built-in', 'Premium Rack Portico', '72 Faders motorizados', '64 Channels recording'],
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=600',
    glowingColor: 'blue',
    featured: true
  },
  {
    id: 'aud-003',
    name: 'Shure PSM1000 Dual-IEM',
    category: 'audio',
    subcategory: 'Monitoreo Personal',
    brand: 'Shure',
    rate: 90,
    description: 'Transmisor dual inalámbrico de monitoreo in-ear con escaneo de frecuencia de grado touring. Diversidad de diversidad en el receptor para evitar cortes.',
    specs: ['Dual-channel Transmitter', 'RF Spectrum Scan', 'Li-ion rechargeable battery', 'SE846 Earphones included', 'Dante input card'],
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=600',
    glowingColor: 'pink'
  },

  // --- EFECTOS ---
  {
    id: 'fx-001',
    name: 'Sparkular Cold Spark Machine',
    category: 'efectos',
    subcategory: 'Chispas Frías',
    brand: 'Showven',
    rate: 80,
    description: 'Generador de fuegos artificiales de interior de última generación. Chispas no pirotécnicas completamente seguras de tocar con control de altura por DMX.',
    specs: ['Non-pyrotechnic', 'Height 1.5m to 5m', 'DMX controlled triggers', 'No smoke / No smell', 'Safety auto-shutdown'],
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=600',
    glowingColor: 'amber',
    featured: true
  },
  {
    id: 'fx-002',
    name: 'Kvant Clubmax 3000 RGB Laser',
    category: 'efectos',
    subcategory: 'Láser Profesional',
    brand: 'Kvant',
    rate: 220,
    description: 'Láser RGB de 3W con escaneo rápido analógico. Sistema de seguridad integrado para haz seguro y colores perfectos. Compatible con control de red ILDA/FB4.',
    specs: ['3,000mW total output', 'Scanner Speed: 40kpps', 'Built-in Pangolin FB4', 'Safety Lens available', 'Heavy-duty Outdoor Case'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWd5nF5aBIUkExA_ZUREkDnMEVD4l9smacKq-cwgTaCsnE71wnPK5yiUQxdAUk2xUQ8hwWfLMI2rONxjibD8jAimexT7W0WvKmEWX8dY0mA_IYU2WW_Nnf3CyMT501q6GwALObwAjJ8_Ek8KptpOBkLVxe6F79jwV7CCvy71zp2BxyLXsSQtFKCHSYFtwYv94GYe81doRLxmRh8vdjOmlD9Wh_p2rNdoKRukETSbrYOstXizAoELNXwPyhR25M-m3dz-Kf_F1m4Q6X',
    glowingColor: 'pink',
    featured: true
  },
  {
    id: 'fx-003',
    name: 'Chauvet Geyser P7 CO2 Jet Effect',
    category: 'efectos',
    subcategory: 'Humo Vertical',
    brand: 'Chauvet Professional',
    rate: 70,
    description: 'Máquina de humo vertical de alta salida iluminada por potentes LEDs RGBA+UV directos para simular fogonazos de CO2 en segundos.',
    specs: ['7 x 9W RGBA+UV LEDs', 'Vertical output over 8m', 'Instant on/off technology', 'DMX 15-channel Control', 'Safe Fluid Base'],
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=600',
    glowingColor: 'blue'
  },

  // --- BACKLINE ---
  {
    id: 'back-001',
    name: 'Fender \'65 Twin Reverb',
    category: 'backline',
    subcategory: 'Amplificadores',
    brand: 'Fender',
    rate: 65,
    description: 'El amplificador de guitarra de tubo por excelencia para tonos limpios inmaculados. 85W a bulbos con sonido reverb de resorte y vibrato clásico de 2 bocinas de 12".',
    specs: ['85 Watts RMS', 'All-tube circuitry', '2x 12" Jensen Speakers', 'Spring Reverb built-in', 'Includes Footswitch & Cover'],
    image: 'https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&q=80&w=600',
    glowingColor: 'rust',
    featured: true
  },
  {
    id: 'back-002',
    name: 'Pearl Reference Pure Drum Kit',
    category: 'backline',
    subcategory: 'Baterías',
    brand: 'Pearl',
    rate: 150,
    description: 'Batería acústica profesional de gama ultra alta. Capas de madera de arce, abedul y caoba mezcladas a medida para un ataque definitivo y resonancia pura.',
    specs: ['22" Bass Drum', '10" & 12" Rack Toms', '14" & 16" Floor Toms', '14" x 5.5" Reference Snare', 'Professional hardware & pedals'],
    image: 'https://images.unsplash.com/photo-1543443374-b6fc11a57268?auto=format&fit=crop&q=80&w=600',
    glowingColor: 'amber',
    featured: true
  },
  {
    id: 'back-003',
    name: 'Nord Stage 4 88-Key Synthesizer',
    category: 'backline',
    subcategory: 'Teclados',
    brand: 'Nord',
    rate: 130,
    description: 'Sintetizador y piano de escenario insignia. Teclado de acción de martillo contrapesada triple sensor, sección de synth independiente con control físico intuitivo.',
    specs: ['88 Weighted Keys', 'Triple Sensor Keybed', 'Piano, Organ, Synth Engines', 'Direct Drawbars built-in', 'Rigid touring Flight Case'],
    image: 'https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&fit=crop&q=80&w=600',
    glowingColor: 'blue'
  }
];
