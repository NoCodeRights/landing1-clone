// Archivo: src/components/Hero.jsx

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="inicio" className="relative w-full h-[60vh] sm:h-screen overflow-hidden">
      {/* Imagen de fondo */}
      <img
        src="/images/hero1.jpeg"
        alt="Piscina instalada por Piscinas Patricio Luengo"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

      {/* Contenido sobre la imagen */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Convierte tu patio en un paraíso
        </motion.h1>

        <motion.p
          className="mt-4 text-lg sm:text-xl md:text-2xl max-w-2xl drop-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Piscinas personalizadas con diseño, calidad y experiencia
        </motion.p>

        <motion.a
          href="#contacto"
          className="mt-6 inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Cotiza tu piscina hoy
        </motion.a>
      </div>
    </section>
  );
}
