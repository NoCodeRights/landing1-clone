'use client';

import { Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="d-flex align-items-center"
      style={{
        height: '100vh',
        backgroundImage: 'url(/images/hero1.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      {/* Capa oscura sobre la imagen */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.4)',
        }}
      />

      <Container className="text-center text-white position-relative">
        <motion.h1
          className="display-4 fw-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Convierte tu patio en un paraíso
        </motion.h1>

        <motion.p
          className="lead mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Piscinas personalizadas con diseño, calidad y experiencia
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Button href="#contacto" size="lg" variant="info">
            Cotiza tu piscina hoy
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
