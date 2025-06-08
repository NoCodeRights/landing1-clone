// src/pages/index.jsx

import Header from '../components/Header';
import Hero from '../components/Hero';
import dynamic from 'next/dynamic';

// Import dinámico del carrusel, solo en cliente
const GalleryCarousel = dynamic(
  () => import('../components/GalleryCarousel'),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      {/* Header fijo en top */}
      <Header />

      <main>
        {/* Sección Hero */}
        <Hero />

        {/* Carrusel de proyectos (cliente-only) */}
        <GalleryCarousel />
      </main>
    </>
  );
}
