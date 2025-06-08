// src/pages/index.jsx

import Header from '../components/Header';
import Hero from '../components/Hero';
import dynamic from 'next/dynamic';
import Process from '../components/Process'; // ✅ Reactivado

// Carrusel client-only
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
        {/* Hero */}
        <Hero />

        {/* Carrusel de proyectos (cliente-only) */}
        <GalleryCarousel />

        {/* Nuestro Proceso */}
        <Process />
      </main>
    </>
  );
}
