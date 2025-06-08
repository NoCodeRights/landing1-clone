// src/pages/index.jsx

import Header from '../components/Header';
import Hero from '../components/Hero';
import dynamic from 'next/dynamic';
import Process from '../components/Process';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';  // ✅ Reactivado

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

        {/* Carrusel de proyectos */}
        <GalleryCarousel />

        {/* Nuestro Proceso */}
        <Process />

        {/* Preguntas Frecuentes */}
        <FAQ />
      </main>

      {/* Footer con contacto */}
      <Footer />
    </>
  );
}
// Nota: El componente Testimonials se ha eliminado de la página principal