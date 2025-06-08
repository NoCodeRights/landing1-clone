// src/pages/index.jsx

import { SEO } from '../utils/seo';
import Header from '../components/Header';
import Hero from '../components/Hero';
import dynamic from 'next/dynamic';
// Carrusel client-only
const GalleryCarousel = dynamic(
  () => import('../components/GalleryCarousel'),
  { ssr: false }
);
import Process from '../components/Process';
// import Testimonials from '../components/Testimonials'; // comentado
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
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

      <Header />

      <main>
        <Hero />
        <GalleryCarousel />
        <Process />
        {/* <Testimonials /> */}
        <FAQ />
      </main>

      <Footer />
    </>
  );
}
