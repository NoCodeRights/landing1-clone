// src/pages/index.jsx

import { SEO } from '../utils/seo';
import Header from '../components/Header';
import Hero from '../components/Hero';
// import dynamic from 'next/dynamic';
// const GalleryCarousel = dynamic(
//   () => import('../components/GalleryCarousel'),
//   { ssr: false }
// );
// import Process from '../components/Process';
// import FAQ from '../components/FAQ';
// import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      {/* Configuración SEO */}
      <SEO
        title="Piscinas Patricio Luengo - Instalación de Piscinas en Chile"
        description="Especialistas en construcción de piscinas a medida. Confianza, experiencia y diseño personalizado."
        keywords={[
          'piscinas Chile',
          'instalación de piscinas',
          'Piscinas Patricio Luengo',
          'piscinas personalizadas',
          'construcción de piscinas'
        ]}
        url="https://www.piscinaspatricioluengo.cl/"
      />

      {/* Header fijo en top */}
      <Header />

      {/* Secciones de la página */}
      <main>
        <Hero />
        {/*
        <GalleryCarousel />
        <Process />
        <FAQ />
        */}
      </main>

      {/*
      <Footer />
      */}
    </>
  );
}
