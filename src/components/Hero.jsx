// src/components/Hero.jsx
'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero1.jpeg')",
        backgroundPosition: 'center top',
        height: '80vh',
        minHeight: '500px'
      }}
    >
      {/* Overlay suave */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Contenedor de texto centrado */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div
          className="text-center"                         // ← aquí
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderRadius: '1.5rem',
            padding: '2rem',
            maxWidth: '768px',
            boxShadow: '0 25px 50px rgba(0,0,0,0.2)'
          }}
        >
          <motion.h1
            className="
              font-serif 
              text-gray-900 
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
              leading-tight
            "
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{ fontFamily: 'Merriweather, serif' }}
          >
            Convierte tu patio <br /> en un paraíso
          </motion.h1>

          <motion.p
            className="
              mt-4 sm:mt-6 
              text-gray-800 
              text-base sm:text-lg md:text-xl 
              leading-snug
            "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Piscinas personalizadas con diseño, calidad y experiencia
          </motion.p>

          <motion.a
            href="#contacto"
            className="
              mt-6 sm:mt-8 
              inline-block 
              rounded-full 
              bg-cyan-600 
              px-6 sm:px-8 
              py-3 sm:py-4 
              text-sm sm:text-base md:text-lg 
              font-semibold 
              text-white 
              shadow-lg 
              transition-colors 
              hover:bg-cyan-700
            "
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Cotiza tu piscina hoy
          </motion.a>
        </div>
      </div>
    </section>
  );
}
